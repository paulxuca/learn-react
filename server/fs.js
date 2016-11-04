const MemoryFileSystem = require('memory-fs');
const memfs = new MemoryFileSystem();

module.exports = {
  fs: memfs
};