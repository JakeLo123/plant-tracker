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
    defaultValue: [],
  },
});

// instance methods
Plant.prototype.getSchedule = function() {
  // MS stands for milliseconds
  const oneDayMS = 86400000;
  const oneWeekMS = oneDayMS * 7;
  const twelveWeeksMS = oneWeekMS * 12;
  const firstWateringDateMS = this.receivedWaterOnDates.length
    ? Date.parse(
        this.receivedWaterOnDates[this.receivedWaterOnDates.length - 1]
      )
    : Date.now();
  const finalWateringDateMS = firstWateringDateMS + twelveWeeksMS;
  const intervalMS = this.waterAfter * oneDayMS;
  let schedule = [];
  let dateMS = firstWateringDateMS;
  while (dateMS <= finalWateringDateMS) {
    let d = new Date(dateMS);
    // if (d.getDay() === 0 || d.getDay() === 6) {
    //   // if Sunday bump to Monday
    //   dateMS += oneDayMS;
    //   d = new Date(dateMS);
    // } else if (d.getDay() === 6) {
    //   // if Saturday bump to Friday
    //   dateMS -= oneDayMS;
    //   d = new Date(dateMS);
    // }
    schedule.push(stringifyDate(d));
    dateMS += intervalMS;
  }
  return schedule;
};

// prototype methods

module.exports = Plant;
