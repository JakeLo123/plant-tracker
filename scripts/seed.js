const { db, Plant } = require('../server/db');
const data = require('./Tandem_Data.json');

async function seedDatabaseWithPlants() {
  await db.sync({ force: true });
  await Promise.all(
    data.map(plant => {
      const waterAfter = getDaysFromString(plant.water_after);
      const p = { name: plant.name, waterAfter: waterAfter };
      Plant.create(p);
    })
  );
}

function getDaysFromString(str) {
  let daysUntilWater = str.slice(0, str.indexOf(' '));
  return Number(daysUntilWater);
}

seedDatabaseWithPlants();
