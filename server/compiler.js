const webpack = require('webpack');
const path = require('path');
const memfs = require('./fs');
const fs = require('fs');
const app = require('./app').app;


function createVendorBundle() {
  return new Promise((resolve, reject) => {
    const compiler = webpack({
      entry: {
        vendor: [path.join(__dirname, 'vendors.js')]
      },
      output: {
        path: path.join(process.cwd(), 'vendors'),
        filename: 'vendors.js',
        library: '[name]',
      },
      plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DllPlugin({
          path: path.join(__dirname, '[name]-manifest.json'),
          name: '[name]',
          context: path.join(process.cwd(), 'bundles'),
        }),
      ],
      resolve: {
        modulesDirectories: ['node_modules'],
      }
    });
    compiler.run((err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
}

function generateBuild(id, entryFile) {
  return new Promise((resolve, reject) => {
    const config = {
      devtool: 'eval',
      entry: [
        `webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr`,
        'babel-polyfill',
        path.join(process.cwd(), 'bundles', `bundle_${id}`, entryFile)
      ],
      output: {
        path: path.join(process.cwd(), 'builds', `/build_${id}`),
        publicPath: `http://localhost:3000/builds/build_${id}`,
        filename: 'bundle.js'
      },
      module:  {
        loaders: [{
          loader: 'babel-loader',
          include: path.join(process.cwd(), 'bundles', `bundle_${id}`),
          query: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }]
      },
      plugins: [
        new webpack.DllReferencePlugin({
          context: path.join(process.cwd(), 'bundles'),
          manifest: require("./vendor-manifest.json") // eslint-disable-line
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ]
    };
    const compiler = webpack(config);
    app.use(require("webpack-dev-middleware")(compiler, { noInfo: false, publicPath: config.output.publicPath }));
    app.use(require("webpack-hot-middleware")(compiler));
    resolve(`/builds/build_${id}`);
  }); 
}

module.exports = {
  generate: generateBuild,
  init: createVendorBundle
};