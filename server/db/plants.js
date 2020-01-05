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
  lastWatered: {
    type: Sequelize.DATEONLY,
    defaultValue: null,
  },
});

// instance methods
Plant.prototype.getSchedule = function() {
  // MS is for milliseconds
  const oneDayMS = 86400000;
  const oneWeekMS = oneDayMS * 7;
  const twelveWeeksMS = oneWeekMS * 12;
  let lastWateredMS;
  if (!this.lastWatered) lastWateredMS = Date.parse(new Date());
  else lastWateredMS = Date.parse(this.lastWatered);
  const finalWateringDateMS = lastWateredMS + twelveWeeksMS;
  const intervalMS = oneDayMS * this.waterAfter;
  let schedule = [];
  let dateMS = lastWateredMS;
  while (dateMS < finalWateringDateMS) {
    let d = new Date(dateMS);
    if (d.getDay() === 0) {
      // if Sunday bump to Monday
      dateMS += oneDayMS;
      d = new Date(dateMS);
    } else if (d.getDay() === 6) {
      // if Saturday bump to Friday
      dateMS -= oneDayMS;
      d = new Date(dateMS);
    }
    schedule.push(stringifyDate(d));
    dateMS += intervalMS;
  }
  return schedule;
};

// prototype methods
// Plant.getMasterSchedule = async function() {
//   const plants = await this.findAll({
//     attributes: ['id', 'name', 'waterAfter', 'receivedWaterOnDates'],
//     order: ['id'],
//   });
//   plants.forEach(plant => {
//     plant.dataValues.schedule = plant.getSchedule();
//   });
//   return plants;
// };

module.exports = Plant;
