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
  lastWateringDate: {
    type: Sequelize.DATEONLY,
    defaultValue: new Date('December 14, 2019')
  }
});

// instance methods
Plant.prototype.getNextWateringDate = function(){
  // I don't think this is what I want, so remember ot change it
  return new Date() - new Date(this.lastWateringDate);
}

// prototype methods
Plant.findAllToWaterToday = async function(){
  const output = await Plant.findAll({
    where: {

    }
  })
}

module.exports = Plant;
