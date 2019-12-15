const dayOfWeekMap = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
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
      11: 'December'
  }

  function parseDate(date) {
    const day = date.getDate();
    const month = monthMap[date.getMonth()];
    const year = date.getFullYear();
    const output = `${month} ${day}, ${year}`;
    return output;
  }

  function getDateValueFromDays(date){
    const d = Date.parse(date);
    const minutes = 1000 * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    // const years = days * 365;
  
    return Math.round(d / days);
  }

  function makeScheduleFromPlants(plants){
      return plants.reduce((accum, plant) => {
        console.log('accum', accum, 'plant', plant)
        plant.schedule.forEach(day => {
            if(!accum[day]) accum[day] = [plant.name];
            else accum[day].push(plant.name);
        })
        return accum;
      }, {})
  }

module.exports = { parseDate, getDateValueFromDays, makeScheduleFromPlants}