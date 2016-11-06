const path = require('path');

module.exports = {
  getEntry: files => files.find(v => v.isEntry).fileName,
  getBundleDir: id => path.join(process.cwd(), 'server', 'bundles', `bundle_${id}`)
};
