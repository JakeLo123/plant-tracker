const router = require('express').Router();
const { Plant } = require('../db');
const { toggleDateFromArray } = require('../../utils');

router.get('/', async (req, res, next) => {
  try {
    const plants = await Plant.findAll({
      attributes: ['id', 'name', 'waterAfter', 'waterHistory'],
      order: ['id'],
    });
    plants.forEach(plant => {
      plant.dataValues.schedule = plant.getSchedule();
      // plant.dataValues.schedule = 'write this!';
    });
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
    const updatedWaterHistory = toggleDateFromArray(
      dateToToggle,
      plant.waterHistory
    );
    await plant.update({
      waterHistory: updatedWaterHistory,
    });
    plant.dataValues.schedule = plant.getSchedule();
    res.json(plant);
  } catch (e) {
    console.log(`could not get plant with ${req.params.id}`);
    next(e);
  }
});

router.post('/add', async (req, res, next) => {
  try {
    let newPlant = await Plant.create(req.body);
    if (!newPlant) {
      console.log('no no can do');
    } else {
      const plants = await Plant.findAll({
        attributes: ['id', 'name', 'waterAfter', 'waterHistory'],
        order: ['id'],
      });
      plants.forEach(plant => {
        plant.dataValues.schedule = plant.getSchedule();
      });
      res.json(plants);
    }
  } catch (e) {
    console.error('something when wrong at POST /add...', e);
    res.sendStatus(404);
  }
});

module.exports = router;
