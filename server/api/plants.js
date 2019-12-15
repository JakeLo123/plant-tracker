const router = require('express').Router();
const { Plant } = require('../db')

router.get('/', async (req, res, next) => {
    try {
        const plants = await Plant.findAll()
        plants.forEach(plant => {
            plant.dataValues.schedule = plant.getSchedule()
        })
        res.json(plants);
    } catch (e) {
        console.log('error getting all plants')
        next(e)
    }
})

module.exports = router;