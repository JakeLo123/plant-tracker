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

router.get('/:id', async (req, res, next) => {
    try {
        const plant = await Plant.findByPk(req.params.id)
        plant.dataValues.schedule = plant.getSchedule();
        res.json(plant)
    } catch (e) {
        console.log(`could not get plant with ${req.params.id}`)
        next(e);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const plant = await Plant.findByPk(req.params.id)
        // await plant.update( DO SOMETHING HERE )
        plant.dataValues.schedule = plant.getSchedule();
        res.json(plant)
    } catch (e) {
        console.log(`could not get plant with ${req.params.id}`)
        next(e);
    }
})

module.exports = router;