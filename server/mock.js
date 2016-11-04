module.exports = {
  testSession: {
    session: {
      files: [{
        fileName: 'index.js',
        isEntry: true,
        contents: `import React from 'react';`
      }]
    },
    config: {
      loaders: [{
        test: /\.js/,
        loader: 'babel-loader'
      }, {
        test: /\.css/,
        loader: 'css-loader'
      }]
    }
  }
};
