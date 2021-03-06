const router = require('express').Router();
const { Plant, User } = require('../db');
const { toggleDateFromArray } = require('../../utils');

router.get('/:userId', async (req, res, next) => {
  try {
    const plants = await Plant.findAll({
      where: {
        userId: req.params.userId,
      },
      attributes: ['id', 'name', 'waterAfter', 'receivedWaterOnDates'],
      order: ['id'],
    });
    plants.forEach(plant => {
      plant.dataValues.schedule = plant.getSchedule();
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
    console.log(`could not get plant with id: ${req.params.id}`);
    next(e);
  }
});

router.post('/add', async (req, res, next) => {
  try {
    const newPlant = await Plant.create(req.body);
    const user = await User.findByPk(req.session.userId);
    user.addPlant(newPlant);
    newPlant.dataValues.schedule = newPlant.getSchedule();
    res.json(newPlant);
  } catch (e) {
    console.log(`could not post plant to database`);
    next(e);
  }
});

module.exports = router;
