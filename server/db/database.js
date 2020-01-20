const Sequelize = require('sequelize');
function checkStuff() {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
}
checkStuff();
const dbName =
  process.env.NODE_ENV === 'test' ? 'tandemplants.test' : 'tandemplants';
const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
});

module.exports = db;
