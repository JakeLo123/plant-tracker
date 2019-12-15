const router = require('express').Router();
const { Plant } = require('../db')
const { toggleDateFromArray } = require('../../utils');

router.get('/', async (req, res, next) => {
    try {
        const plants = await Plant.findAll({ order: ['id']})
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
        const plantId = req.params.id
        const dateToToggle = req.body.dateToToggle;
        const plant = await Plant.findByPk(plantId)
        const updatedReceivedWaterOnDates = toggleDateFromArray(dateToToggle, plant.receivedWaterOnDates);
        await plant.update({
            receivedWaterOnDates: updatedReceivedWaterOnDates
        })
        plant.dataValues.schedule = plant.getSchedule();
        res.json(plant)
    } catch (e) {
        console.log(`could not get plant with ${req.params.id}`)
        next(e);
    }
})

module.exports = router;