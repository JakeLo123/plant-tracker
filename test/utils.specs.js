const { stringifyDate,
    makeScheduleFromPlants,
    getNextDay,
    getWeekFromDay,
    toggleDateFromArray
} = require('../utils');
const { assert, expect } = require('chai');

describe('utility functions for parsing dates', () => {
    describe('stringifyDate', () => {
        it('accepts a date object and returns string', () => {
            const date = new Date()
            assert.typeOf(stringifyDate(date), 'string');
        })
        it('returns a string in the format of DAY MONTH DATE YEAR', () => {
            const hanukka = new Date('12/22/2019')
            const christmas = new Date('12/25/2019')
            const newYears = new Date('1/1/2020')
            expect(stringifyDate(hanukka)).to.equal('Sunday December 22, 2019');
            expect(stringifyDate(christmas)).to.equal('Wednesday December 25, 2019');
            expect(stringifyDate(newYears)).to.equal('Wednesday January 1, 2020');
        })
    })
    describe('makeScheduleFromPlants', () => {
        const cucumberPlant = {
            name: 'cucumber plant',
            schedule: [ 'day1', 'day2', 'day3' ] 
        }
        const cactusPlant = {
            name: 'cactus',
            schedule: [ 'day1', 'day3', 'day5' ]
        }
        const testPlants = [ cucumberPlant, cactusPlant ];
        it('creates a schedule object from an array of plants', () => {
            expect(makeScheduleFromPlants(testPlants)).to.deep.equal({
                'day1': [ cucumberPlant, cactusPlant ],
                'day2': [ cucumberPlant ],
                'day3': [ cucumberPlant, cactusPlant ],
                'day5': [ cactusPlant ]
            })
        })
    })
    describe('getNextDay', () => {
        it('accepts a date string and returns a string one after the date given to it', () => {
            expect(getNextDay('Wednesday December 25, 2019')).to.equal('Thursday December 26, 2019')
            expect(getNextDay('Tuesday December 31, 2019')).to.equal('Wednesday January 1, 2020')
        })
    })
    describe('getWeekFromDay', () => {
        const week1 = [
            'Monday December 16, 2019',
            'Tuesday December 17, 2019',
            'Wednesday December 18, 2019',
            'Thursday December 19, 2019',
            'Friday December 20, 2019'
        ];
        const week2 = [
            'Monday December 23, 2019',
            'Tuesday December 24, 2019',
            'Wednesday December 25, 2019',
            'Thursday December 26, 2019',
            'Friday December 27, 2019'
        ]
        let resultMonday, resultTuesday, resultWednesday, resultThursday, resultFriday, resultSaturday, resultSunday;
        beforeEach(() => {
            resultMonday = getWeekFromDay('Monday December 16, 2019');
            resultTuesday = getWeekFromDay('Tuesday December 17, 2019');
            resultWednesday = getWeekFromDay('Wednesday December 18, 2019');
            resultThursday = getWeekFromDay('Thursday December 19, 2019');
            resultFriday = getWeekFromDay('Friday December 20, 2019');
            resultSaturday = getWeekFromDay('Saturday December 21, 2019');
            resultSunday = getWeekFromDay('Sunday December 22, 2019');
        })
        it('accepts a date string and returns an array of date strings', () => {
            resultMonday.forEach(item => assert.typeOf(item, 'string'))
        })
        it('returns the week beginning on sunday', () => {
            expect(resultSunday).to.deep.equal(week2)
            expect(resultMonday).to.deep.equal(week1)
            expect(resultTuesday).to.deep.equal(week1)
            expect(resultWednesday).to.deep.equal(week1)
            expect(resultThursday).to.deep.equal(week1)
            expect(resultFriday).to.deep.equal(week1)
            expect(resultSaturday).to.deep.equal(week1)
        })
    })
    describe('toggleDateFromArray', () => {
        let dateToToggle, someArray;
        beforeEach(function() {
            someArray = [ 'date1', 'date2', 'date3', 'date4' ]
            dateToToggle = 'December 25, 2019';
        });
        it('accepts an item and an array; it returns the array with the item pushed in, or filtered out of the array', () => {
            assert.equal(someArray.includes(dateToToggle), false);
            let updatedArray = toggleDateFromArray(dateToToggle, someArray)
            assert.equal(updatedArray.includes(dateToToggle), true);
            updatedArray = toggleDateFromArray(dateToToggle, someArray)
            assert.equal(updatedArray.includes(dateToToggle), false);
        })
    })
})