const path = require('path');

module.exports = {
  getEntry: (files) => files.find((v) => v.isEntry).fileName
};
