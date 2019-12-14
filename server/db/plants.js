const Sequelize = require('sequelize');
const db = require('./database');

const Plant = db.define('plant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  waterAfter: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Plant;
