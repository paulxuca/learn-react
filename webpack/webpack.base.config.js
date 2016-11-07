const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = config => ({
  cache: config.cache,
  devtool: config.devtool,
  entry: config.entry,
  output: Object.assign({}, {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
  }, config.output),
  context: path.join(__dirname, '../src'),
  module: {
    loaders: [{
      test: /\.js/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        plugins: [
          'transform-decorators-legacy',
          'transform-async-to-generator',
          ['fast-async', {
            env: { dontMapStackTraces: true },
          }],
        ],
        presets: ['es2015', 'stage-0', 'react'],
      },
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css'),
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file-loader',
        {
          loader: 'image-webpack',
          query: {
            progressive: true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
          },
        },
      ],
    }],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.IS_CLIENT': true }),
    new HtmlWebpackPlugin({
      hash: false,
      template: '../src/index.html',
    }),
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
  ].concat(config.plugins),
});
