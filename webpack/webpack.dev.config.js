const webpack = require('webpack');
const path = require('path');
const config = require('../server/config');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.base.config')({ // eslint-disable-line
  cache: true,
  devtool: 'eval',
  output: {
    publicPath: '/',
    pathinfo: true,
    path: path.resolve(process.cwd(), 'build'),
  },
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    `webpack-dev-server/client?http://localhost:${config.dev.port}/`,
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.DEV': true,
      'process.env.BROWSER': true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});

const compiler = webpack(webpackConfig);
const compilerConfig = {
  filename: 'bundle.js',
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    assets: false,
    warnings: false,
  },
};

new WebpackDevServer(compiler, compilerConfig)
.listen(config.dev.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Frontend dev server listening on localhost:${config.dev.port}`);
});
