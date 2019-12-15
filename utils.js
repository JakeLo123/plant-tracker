const dayOfWeekMap = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  };

  function parseDate(dateObj) {
    const dayOfWeek = dayOfWeekMap[dateObj.getDay()];
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const output = `${dayOfWeek} ${day}-${month}-${year}`;
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

module.exports = { parseDate, getDateValueFromDays}