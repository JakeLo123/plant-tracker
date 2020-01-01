const { Plant, db } = require('../server/db');
const { expect, assert } = require('chai');

describe('Plant class', () => {
  let testPlant1;
  beforeEach(async () => {
    await db.sync({ force: true });
    testPlant1 = {
      name: 'cucumber',
      waterAfter: 7,
    };
  });
  it('creates an instance with a name, waterAfter, and receivedWaterOn properties', async () => {
    const cucumber = await Plant.create(testPlant1);
    expect(cucumber.name).to.equal('cucumber');
    expect(cucumber.waterAfter).to.equal(7);
    expect(cucumber.receivedWaterOnDates).to.deep.equal([]);
  });
  describe('getSchedule instance method', () => {
    let cucumber, schedule;
    const oneDayMilliseconds = 86400000;
    beforeEach(async () => {
      cucumber = await Plant.create(testPlant1);
      schedule = cucumber.getSchedule();
    });
    it('the Monday December 16, 2019 is the first watering day', () => {
      expect(cucumber.getSchedule()[0]).to.include('Monday December 16, 2019');
    });
    it('does not include saturdays or sundays', () => {
      function isWeekday(str) {
        const weekDays = [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ];
        return weekDays.includes(str);
      }
      for (let i = 0; i < schedule.length; ++i) {
        let day = schedule[0].split(' ')[0];
        assert.equal(isWeekday(day), true);
      }
    });
    it("the interval between waterings is within 1 day of the plant's waterAfter property", () => {
      const minInterval =
        cucumber.waterAfter * oneDayMilliseconds - oneDayMilliseconds;
      const maxInterval =
        cucumber.waterAfter * oneDayMilliseconds + oneDayMilliseconds;
      for (let i = 0; i < schedule.length - 1; ++i) {
        expect(
          Math.abs(Date.parse(schedule[i]) - Date.parse(schedule[i + 1]))
        ).to.be.within(minInterval, maxInterval);
      }
    });
    it('should ceate a schedule that is 1 year long', () => {
      const oneDayMS = 86400000;
      const oneYearMS = oneDayMS * 365;
      const firstDateMS = Date.parse(schedule[0]);
      const lastDateMS = Date.parse(schedule[schedule.length - 1]);
      expect(lastDateMS - firstDateMS).to.be.lessThan(oneYearMS);
    });
  });
});
