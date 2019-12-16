const { Plant, db } = require('../server/db');
const { expect, assert } = require('chai')

describe('Plant class', () => {
    let testPlant1;
    beforeEach(async () => {
        await db.sync({ force: true })
        testPlant1 = {
            name: 'cucumber',
            waterAfter: 3
        }
    })
    it('creates an instance with a name, waterAfter, and receivedWaterOn properties', async () => {
        const cucumber = await Plant.create(testPlant1);
        expect(cucumber.name).to.equal('cucumber');
        expect(cucumber.waterAfter).to.equal(3)
        expect(cucumber.receivedWaterOnDates).to.deep.equal([])
    })
    describe('getSchedule instance method', () => {
        let cucumber, schedule;
        const oneDayMilliseconds = 86400000;
        beforeEach(async () => {
            cucumber = await Plant.create(testPlant1)
            schedule = cucumber.getSchedule()
        })
        it('returns an array of date strings', () => {
            // schedule.forEach(element => {
            //     assert.equal()
            // })
        })
        it('returns an array of date strings on which the plant needs to be watered', () => {
            
        })
        it('should not include saturdays or sundays', () => {

        })
        it('should last for 12 weeks', () => {
            // const twelveWeeks = 7 * 12;
        })
    })
})