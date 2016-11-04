const fs = require('fs-extra');
const path = require('path');
const mongoose = require('mongoose');

module.exports = {
  initializeServer: () => {
    mongoose.connect('mongodb://localhost/learn', (err) => {
      if (err) throw new Error(err);
      console.log('Successful connection to mongodb');
      fs.mkdirpSync(path.join(process.cwd(), 'bundles'));
    });
  }
};