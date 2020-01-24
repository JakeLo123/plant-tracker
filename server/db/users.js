const Sequelize = require('sequelize');
const db = require('./database');

const User = db.define('users', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
