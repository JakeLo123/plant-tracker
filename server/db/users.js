const Sequelize = require('sequelize');
const db = require('./database');
const crypto = require('crypto');

const User = db.define(
  'users',
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue('salt');
      },
    },
  },
  {
    hooks: {
      beforeCreate: setAndSaltPassword,
      beforeUpdate: setAndSaltPassword,
    },
  }
);

User.prototype.hasCorrectPassword = function(candidatePassword) {
  return encryptPassword(candidatePassword, this.salt()) === this.password;
};

function setAndSaltPassword(user) {
  user.salt = generateSalt();
  user.password = encryptPassword(user.password, user.salt());
}

function generateSalt() {
  return crypto.randomBytes(16).toString('base64');
}

function encryptPassword(password, salt) {
  return crypto
    .createHash('sha1')
    .update(password)
    .update(salt)
    .digest('hex');
}

module.exports = User;
