const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const config = require('./config');
const routes = require('./routes');
const init = require('./init');


init.initializeServer();


const app = express();
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.post('/api/create', routes.create);
app.use('/builds', express.static(path.join(process.cwd(), 'builds')));
app.listen(config.http.port, (err) => {
   if (err) {
     console.log(err);
     process.exit(0);
   }
   console.log(`Server listening on localhost:${config.http.port}`);
});