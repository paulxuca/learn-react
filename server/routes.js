/* REMOVE ON DEV */
const sessions = require('./sessions');

function create(req, res){
  sessions.create(req.body)
  .then((buildPath) => {
    res.status(200).json({
      buildPath: buildPath
    });
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}

module.exports = {
  create: create
};
