const fs = require('fs-extra');
const path = require('path');
const mongoose = require('mongoose');
const compiler = require('./compiler');

module.exports = {
  initializeServer: () => {
    mongoose.connect('mongodb://localhost/learn', (err) => {
      if (err) throw new Error(err);
      console.log('Successful connection to mongodb');
      fs.emptyDir(path.join(process.cwd(), 'server', 'bundles'));
      fs.emptyDir(path.join(process.cwd(), 'server', 'vendors'));
      compiler
        .init()
        .then(() => {
          console.log('vendors bundle initialized');
        })
        .catch((compilerError) => {
          console.log(compilerError);
        });
    });
  },
};
