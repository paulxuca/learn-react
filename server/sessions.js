const path = require('path');
const fs = require('fs-extra');
const models = require('./models');
const compiler = require('./compiler');
const utils = require('./utils');

function createSession(data){
  const { files } = data;
  return new Promise((resolve, reject) => {
    try {
      models.createSession({ files: files })
      .then((newSession) => {
        const { _id } = newSession;
        const bundleDir = path.join(process.cwd(), 'bundles', `bundle_${_id}`);
        fs.ensureDirSync(bundleDir);
        files.forEach((eachFile) => {
          fs.ensureFileSync(path.join(bundleDir, eachFile.fileName));
        });
        const entryFileName = utils.getEntry(files);
        compiler.generate(_id, entryFileName)
          .then((buildUrl) => {
            resolve(buildUrl);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}


module.exports = {
  create: createSession
};
