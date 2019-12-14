const router = require('express').Router();
const { Plant } = require('../db')
const { parseDate } = require('../../utils')

router.get('/', async (req, res, next) => {
    try {
        const plant = await Plant.findByPk(1)
        let d = new Date(plant.lastWateringDate)
        // d = parseDate(d)
        console.log(typeof d)
        res.send(d)
    } catch (e) {
        console.error('couldn\'t find plant: ', e)
    }
})

module.exports = router;