const Sequelize = require('sequelize');
const db = require('./database');
const { stringifyDate } = require('../../utils');

const Plant = db.define('plant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  waterAfter: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  receivedWaterOnDates: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  }
});

// instance methods
Plant.prototype.getSchedule = function(){
  const finalWateringDate = new Date('March 17, 2020');
  const oneDayMilliseconds = 86400000;
  const interval = this.waterAfter * oneDayMilliseconds;
  let schedule = [];
  let currentDate = Date.parse('Monday December 16, 2019');
  while(currentDate < finalWateringDate){
    let d = new Date(currentDate);
    if(d.getDay() === 0){
      currentDate += oneDayMilliseconds;
      d = new Date(currentDate);
    }
    else if (d.getDay() === 6){
      currentDate -= oneDayMilliseconds;
      d = new Date(currentDate);
    }
    schedule.push(stringifyDate(d))
    currentDate += interval;
  }
  return schedule;
}

// prototype methods

module.exports = Plant;
