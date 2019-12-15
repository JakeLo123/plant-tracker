const Sequelize = require('sequelize');
const db = require('./database');
const { getDateValueFromDays } = require('../../utils')

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
    defaultValue: new Date('December 16, 2019')
  }
});

// instance methods
Plant.prototype.getSchedule = function(){
  const finalWateringDate = new Date('March 17, 2020');
  const oneDay = 86400000
  const interval = this.waterAfter * oneDay;
  let schedule = []
  let currentDate = Date.parse(this.lastWateringDate)
  while(currentDate < finalWateringDate){
    schedule.push(new Date(currentDate))
    currentDate += interval;
  }
  return schedule;
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
