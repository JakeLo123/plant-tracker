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
    defaultValue: new Date('2019-12-15')
  }
});

// instance methods
Plant.prototype.getTimeSinceLastWater = function(){
  let timeSinceLastWater = new Date(this.lastWateringDate);
  return new Date() - timeSinceLastWater;
}

Plant.prototype.needsWater = function(){
  let oneDay = 86400000;
  let timeSinceLastWater = this.getTimeSinceLastWater();
  let timeUntilNeedsWater = this.waterAfter * oneDay;
  return timeSinceLastWater > timeUntilNeedsWater;
}

Plant.prototype.needsWaterOnDate = function(date){
  let oneDay = 86400000;
  let timeUntilNeedsWater = this.waterAfter * oneDay;
  let lastWateringDate = new Date(this.lastWateringDate);
  let needsWaterOnDate = date - lastWateringDate
  return timeUntilNeedsWater > needsWaterOnDate;
}

// prototype methods
Plant.findAllToWaterOnDate = async function(date){
  const d = new Date(date);
  console.log('date... ', d)
  let plants = await Plant.findAll();
  let output = plants.filter(plant => !plant.needsWaterOnDate(d))
  return output
}

module.exports = Plant;
