const Sequelize = require('sequelize');
const db = require('./database');
const { stringifyDate } = require('../../utils');

const Plant = db.define('plants', {
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
  const finalWateringDate = new Date('March 10, 2020');
  const oneDayMilliseconds = 86400000;
  const interval = this.waterAfter * oneDayMilliseconds;
  let schedule = [];
  let date = Date.parse('Monday December 16, 2019');
  while(date < finalWateringDate){
    let d = new Date(date);
    if(d.getDay() === 0){
      date += oneDayMilliseconds;
      d = new Date(date);
    }
    else if (d.getDay() === 6){
      date -= oneDayMilliseconds;
      d = new Date(date);
    }
    schedule.push(stringifyDate(d))
    date += interval;
  }
  return schedule;
}

// prototype methods

module.exports = Plant;
