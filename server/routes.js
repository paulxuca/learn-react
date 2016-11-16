/* REMOVE ON DEV */
const sessions = require('./sessions');

function create(req, res) {
  sessions.create(req.body)
  .then((buildPath) => {
    res.status(200).json({
      buildPath,
    });
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}

function getLesson(req, res) {
  const mockLesson = require('./lessons/first'); // eslint-disable-line

  res.status(200).json(mockLesson);
}

module.exports = {
  create,
  getLesson,
};
