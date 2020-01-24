const { db, Plant, User } = require('../server/db');
// const data = require('./Tandem_Data.json');

async function seedDatabaseWithPlants() {
  try {
    await db.sync({ force: true });
    const plant1 = await Plant.create({
      name: 'banana',
      waterAfter: 1,
    });
    const plant2 = await Plant.create({
      name: 'tomato',
      waterAfter: 2,
    });
    const plant3 = await Plant.create({
      name: 'flower',
      waterAfter: 3,
    });
    const jake = await User.create({
      username: 'Jake',
      password: 'banana',
    });
    await jake.setPlants([plant1, plant2, plant3]);
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
