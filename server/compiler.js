/* eslint global-require: 0 import/newline-after-import: 0*/
const webpack = require('webpack');
const path = require('path');
const config = require('./config');
const app = require('./app').app;


function createVendorBundle() {
  return new Promise((resolve, reject) => {
    const compiler = webpack({
      entry: {
        vendor: [path.join(__dirname, 'vendors.js')],
      },
      output: {
        path: path.join(process.cwd(), 'server', 'vendors'),
        filename: 'vendors.js',
        library: '[name]',
      },
      plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DllPlugin({
          path: path.join(__dirname, 'vendor', '[name]-manifest.json'),
          name: '[name]',
          context: path.join(process.cwd(), 'bundles'),
        }),
      ],
      resolve: {
        modulesDirectories: ['node_modules'],
      },
    });
    compiler.run((err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
}

function generateBuild(id, entryFile) {
  return new Promise((resolve) => {
    const webpackConfig = {
      devtool: 'eval',
      entry: [
        `webpack-hot-middleware/client?path=http://localhost:${config.http.port}/__webpack_hmr`,
        'babel-polyfill',
        path.join(process.cwd(), 'server', 'bundles', `bundle_${id}`, entryFile)
      ],
      output: {
        path: path.join(process.cwd(), 'server', 'builds', `/build_${id}`),
        publicPath: `http://localhost:3000/builds/build_${id}`,
        filename: 'bundle.js',
      },
      module: {
        loaders: [{
          loader: 'babel-loader',
          include: path.join(process.cwd(), 'server', 'bundles', `bundle_${id}`),
          query: {
            presets: ['es2015', 'stage-0', 'react'],
          },
        }],
      },
      plugins: [
        new webpack.DllReferencePlugin({
          context: path.join(process.cwd(), 'bundles'),
          manifest: require("./vendor/vendor-manifest.json") // eslint-disable-line
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
      ],
    };
    const compiler = webpack(webpackConfig);
    app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(require('webpack-hot-middleware')(compiler));
    resolve(`/builds/build_${id}`);
  });
}

module.exports = {
  generate: generateBuild,
  init: createVendorBundle,
};
