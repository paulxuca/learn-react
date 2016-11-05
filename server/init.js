const fs = require('fs-extra');
const path = require('path');
const mongoose = require('mongoose');
const compiler = require('./compiler');

module.exports = {
  initializeServer: () => {
    mongoose.connect('mongodb://localhost/learn', (err) => {
      if (err) throw new Error(err);
      console.log('Successful connection to mongodb');
      fs.mkdirpSync(path.join(process.cwd(), 'bundles'));
      fs.mkdirpSync(path.join(process.cwd(), 'vendors'));
      compiler
        .init()
        .then(stats => {
          console.log(stats);
          console.log('vendors bundle initialized');
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
};