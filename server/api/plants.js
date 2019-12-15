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

module.exports = router;