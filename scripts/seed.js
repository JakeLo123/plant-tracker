const { db, Plant, User } = require('../server/db');
// const data = require('./Tandem_Data.json');

async function seedDatabaseWithPlants() {
  try {
    await db.sync({ force: true });
    // await Promise.all(
    //   data.map(plant => {
    //     const waterAfter = getDaysFromString(plant.water_after);
    //     const p = { name: plant.name, waterAfter: waterAfter };
    //     Plant.create(p);
    //     console.log('created plant: ', p);
    //   })
    // );
    await Plant.create({
      name: 'banana',
      waterAfter: 1,
    });
    await Plant.create({
      name: 'tomato',
      waterAfter: 2,
    });
    await Plant.create({
      name: 'flower',
      waterAfter: 3,
    });
    await User.create({
      name: 'Jake',
      password: 'banana',
    });
    console.log('Seeding success! Seeds planted!');
  } catch (e) {
    console.error('error seeding database...', e);
  }
}

// function getDaysFromString(str) {
//   let daysUntilWater = str.slice(0, str.indexOf(' '));
//   return Number(daysUntilWater);
// }

seedDatabaseWithPlants();

module.exports = seedDatabaseWithPlants;
