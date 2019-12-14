const { db, Plant } = require('../server/db');
// const fs = require('fs');
const data = require('./Tandem_Data.json');

function seedDatabaseWithPlants() {
  //   await Promise.all(
  //     data.forEach(plant => {
  //       Plant.create({
  //         name: plant.name,
  //         waterAfter: plant.water_after,
  //       });
  //     })
  //   );
  console.log(data);
}

seedDatabaseWithPlants();
