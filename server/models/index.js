const Session = require('./Session');
const config = require('../config');
const app = require('../app').app;

function removeInactiveSessions() {
  //TODO: This
  console.log('cleaning inactive sessions');
  return new Promise((resolve, reject) => {
    Session.find({ isActive: true }, (err, activeSessions) => {
      try {
        activeSessions.filter((eachSession) => {
          Date.now() - eachSession.dateTouched > config.server.inactiveTime
        }).forEach((eachSession) => {
          Session.update({ _id: eachSession._id }, { $set: { isActive: false }});
        });
        resolve();
      } catch(error) {
        reject(error);
      }
    });
  });
}

function createSession(sessionObject) {
  return new Promise((resolve, reject) => {
    const newSession = new Session(sessionObject);
    newSession.save((err, newSessionDocument) => {
      if (err){
        reject(err);
      }
      resolve(newSessionDocument);
    });
  });
}

function updateSession(files, id) {
  return new Promise((resolve, reject) => {
    Session.update({ _id: id }, { $set: { files: files, dateTouched: Date.now() } }, (err, updatedSession) => {
      if (err) {
        reject(err);
      }
      resolve(updatedSession);
    })
  });
}

function isEntryFileSame(id, currentEntry) {
  return new Promise((resolve, reject) => {
    Session.findOne({ _id: id }, (err, foundDoc) => {
      if (err) {
        reject(err);
      }
      resolve(foundDoc.entryFile === currentEntry);
    });  
  });
}

module.exports = {
  createSession: createSession,
  removeInactiveSessions: removeInactiveSessions,
  updateSession: updateSession,
  isEntryFileSame: isEntryFileSame
};
