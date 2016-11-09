/* eslint global-require: 0 import/newline-after-import: 0*/
const webpack = require('webpack');
const path = require('path');
const config = require('./config');
const app = require('./app').app;
const middleware = require('./middleware');


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
        path.join(process.cwd(), 'server', 'bundles', `bundle_${id}`, entryFile),
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
    const hotMiddleware = require('webpack-hot-middleware')(compiler);
    const devMiddleware = require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath });

    // Set the middleware in memory
    middleware.wrapper.set(id, devMiddleware, hotMiddleware);
    const setMiddleware = middleware.wrapper.get(id);

    app.use(setMiddleware.dev);
    app.use(setMiddleware.hot);
    resolve(`/builds/build_${id}`);
  });
}

module.exports = {
  generate: generateBuild,
  init: createVendorBundle,
};
