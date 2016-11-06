const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./routes');
const init = require('./init');
const models = require('./models');
const app = require('./app').app;


init.initializeServer();


setInterval(models.removeInactiveSessions, config.server.cleanupTime);
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

app.post('/api/create', routes.create);
app.listen(config.http.port, (err) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }
  console.log(`backend server listening on localhost:${config.http.port}`);
});


module.exports = {
  app,
};
