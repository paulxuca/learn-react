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
        const buildDir = path.join(process.cwd(), 'builds', `build_${_id}`)
        fs.ensureDirSync(bundleDir);
        fs.ensureDirSync(buildDir);
        files.forEach((eachFile) => {
          fs.ensureFileSync(path.join(bundleDir, eachFile.fileName));
          fs.outputFileSync(path.join(bundleDir, eachFile.fileName), eachFile.contents);
        });
        const entryFileName = utils.getEntry(files);
        compiler.generate(_id, entryFileName)
          .then((data) => {
            resolve(`/builds/build_${_id}/bundle.js`);
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
