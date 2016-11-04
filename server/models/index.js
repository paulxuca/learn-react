const Session = require('./Session');

module.exports = {
  createSession: (sessionObject) => {
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
};
