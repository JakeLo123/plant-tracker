const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require('./db');
const path = require('path')

function createApp() {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '..', 'public')));
  //   app.use(express.json());
  //   app.use(express.urlencoded({ extended: true }));

  app.use('/api', require('./api'))

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(500).send(err.message || 'internal server error');
  });
}

const port = 3030;

function startApp() {
  try {
    db.sync();
    console.log('database synced');
  } catch (err) {
    console.error('error syncing database: ', err);
  }
  app.listen(port, () => {
    console.log('listening on port ', port);
  });
}

createApp();
startApp();