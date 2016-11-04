const webpack = require('webpack');
const path = require('path');
const memfs = require('./fs');
const fs = require('fs');

function generateBuild(id, entryFile) {
  return new Promise((resolve, reject) => {
    const compiler = webpack({
    devtool: 'eval',
    entry: [
      'babel-polyfill',
      path.join(process.cwd(), 'bundles', `bundle_${id}`, entryFile)
    ],
    output: {
      path: path.join(process.cwd(), 'builds', `/build_${id}`),
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        loader: 'babel-loader',
        include: path.join(process.cwd(), 'bundles', `bundle_${id}`),
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }]
    }
  });
  compiler.run((err, stats) => {
    if (err) reject(err);
    resolve(stats);
  });
  }); 
}

module.exports = {
  generate: generateBuild
}