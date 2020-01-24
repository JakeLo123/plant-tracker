const db = require('./database');
const Plant = require('./plants');
const User = require('./users');

User.hasMany(Plant);

module.exports = { db, Plant, User };
