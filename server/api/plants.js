const router = require('express').Router();
const { Plant } = require('../db');
const { toggleDateFromArray } = require('../../utils');

router.get('/', async (req, res, next) => {
  try {
    const plants = await Plant.findAll({
      attributes: ['id', 'name', 'waterAfter', 'receivedWaterOnDates'],
      order: ['id'],
    });
    console.log("it's starting...");
    plants.forEach(plant => {
      plant.dataValues.schedule = ['Friday January 3, 2020'];
    });
    console.log("it's done...");
    res.json(plants);
  } catch (e) {
    console.log('error getting plants...');
    next(e);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const plantId = req.params.id;
    const dateToToggle = req.body.dateToToggle;
    const plant = await Plant.findByPk(plantId);
    const updatedReceivedWaterOnDates = toggleDateFromArray(
      dateToToggle,
      plant.receivedWaterOnDates
    );
    await plant.update({
      receivedWaterOnDates: updatedReceivedWaterOnDates,
    });
    plant.dataValues.schedule = plant.getSchedule();
    res.json(plant);
  } catch (e) {
    console.log(`could not get plant with ${req.params.id}`);
    next(e);
  }
});

router.post('/addNewPlant', async (req, res, next) => {
  try {
    await Plant.create(req.body);
    const updatedPlants = await Plant.getMasterSchedule();
    res.json(updatedPlants);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
