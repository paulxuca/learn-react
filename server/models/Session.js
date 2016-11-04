const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  dateTouched: {
    type: Date,
    default: Date.now()
  },
  files: [],
  author: String,
  packages: {
    type: [Object],
    default: []
  }
});

module.exports = mongoose.model('Session', sessionSchema);
