const path = require('path');
const fs = require('fs-extra');
const models = require('./models');
const compiler = require('./compiler');
const utils = require('./utils');

function ensureFiles(files, bundleDir) {
  files.forEach((eachFile) => {
    fs.outputFileSync(path.join(bundleDir, eachFile.fileName), eachFile.contents);
  });
}

function createSession(data) {
  const { files } = data;
  return new Promise((resolve, reject) => {
    try {
      const entryFileName = utils.getEntry(files);
      models.createSession({ files, entryFile: entryFileName })
      .then((newSession) => {
        const { _id } = newSession;
        const bundleDir = utils.getBundleDir(_id);
        fs.ensureDirSync(bundleDir);
        ensureFiles(files, bundleDir);
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

function updateSession(data) {
  const { files, id } = data;
  return new Promise((resolve, reject) => {
    models
      .updateSession(files, id)
      .then(() => {
        ensureFiles(files);
      })
      .then((updateError) => {
        reject(updateError);
      });
  });
}

module.exports = {
  create: createSession,
  update: updateSession,
};
