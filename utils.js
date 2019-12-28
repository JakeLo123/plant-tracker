const dayOfWeekMap = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const monthMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const lengthOfOneDayMilliseconds = 86400000;

function stringifyDate(dateObject) {
  const dayOfWeek = dayOfWeekMap[dateObject.getDay()];
  const month = monthMap[dateObject.getMonth()];
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  const output = `${dayOfWeek} ${month} ${day}, ${year}`;
  return output;
}

function makeScheduleFromPlants(plants) {
  return plants.reduce((accum, plant) => {
    plant.schedule.forEach(day => {
      if (!accum[day]) accum[day] = [plant];
      else accum[day].push(plant);
    });
    return accum;
  }, {});
}

function getNextDay(dateString) {
  const d = Date.parse(dateString);
  const nextDay = new Date(d + lengthOfOneDayMilliseconds);
  return stringifyDate(nextDay);
}

function getWeekFromDay(dateString) {
  const week = [];
  let curDateObj = new Date(dateString);
  let day = curDateObj.getDay();
  if (day === 0) {
    curDateObj = new Date(Date.parse(curDateObj) + lengthOfOneDayMilliseconds);
    day = new Date(curDateObj).getDay();
  } else if (day > 1) {
    while (day > 1) {
      curDateObj = new Date(
        Date.parse(curDateObj) - lengthOfOneDayMilliseconds
      );
      day = new Date(curDateObj).getDay();
    }
  }
  while (day < 6) {
    let dateStringToAdd = stringifyDate(curDateObj);
    week.push(dateStringToAdd);
    curDateObj = new Date(Date.parse(curDateObj) + lengthOfOneDayMilliseconds);
    day = new Date(curDateObj).getDay();
  }
  return week;
}

function toggleDateFromArray(dateToToggle, arrayOfDates) {
  if (arrayOfDates.includes(dateToToggle)) {
    arrayOfDates = arrayOfDates.filter(date => date !== dateToToggle);
  } else {
    arrayOfDates.push(dateToToggle);
  }
  return arrayOfDates;
}

function createDateOptions() {
  let output = ['Monday December 16, 2019'];
  for (let i = 0; i < 85; ++i) {
    let curDateString = output[i];
    output.push(getNextDay(curDateString));
  }
  return output;
}

module.exports = {
  stringifyDate,
  makeScheduleFromPlants,
  getNextDay,
  getWeekFromDay,
  toggleDateFromArray,
  createDateOptions,
};
