const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tandemplants', {
  logging: false,
});

module.exports = db;
