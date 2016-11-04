/* REMOVE ON DEV */
const sessions = require('./sessions');

function create(req, res){
  sessions.create(req.body)
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}

module.exports = {
  create: create
};
