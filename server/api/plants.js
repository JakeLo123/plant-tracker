const router = require('express').Router();
const { Plant } = require('../db')
const { parseDate } = require('../../utils')

router.get('/', async (req, res, next) => {
    try {
        const plants = await Plant.findAll()
        res.json(plants);
    } catch (e) {
        console.error('couldn\'t find plant: ', e)
    }
})

router.get('/:date', async (req, res, next) => {
    try {
        let d = new Date(req.params.date);
        const plants = await Plant.findAllToWaterOnDate(d)
        res.json({
            date:d,
            plants: plants
        })
    } catch (e) {
        console.error('couldn\'t find plants for date ' + req.params.date, e)
    }
})

module.exports = router;