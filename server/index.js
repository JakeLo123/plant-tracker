const express = require('express');
const app = express();
const morgan = require('morgan');
const { db } = require('./db');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
module.exports = app;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

function createApp() {
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'insecure',
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api', require('./api'));
  app.use('/auth', require('./auth'));

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(500).send(err.message || 'internal server error');
  });
}

const port = process.env.PORT || 3030;

function startListening() {
  app.listen(port, () => {
    console.log('listening on port ', port);
  });
}

function startApp() {
  try {
    db.sync();
    console.log('database synced');
  } catch (err) {
    console.error('error syncing database: ', err);
  }
  startListening();
}

if (require.main === module) {
  createApp();
  startApp();
} else {
  createApp();
}
