const app = require('../server');
const { Plant, db } = require('../server/db');
const { expect, assert } = require('chai');
const request = require('supertest');

describe('api routes', () => {
  let testPlant1, testPlant2, testPlant3;
  beforeEach(async () => {
    await db.sync({ force: true });
    testPlant1 = await Plant.create({ name: 'plant1', waterAfter: 2 });
    testPlant2 = await Plant.create({ name: 'plant2', waterAfter: 6 });
    testPlant3 = await Plant.create({ name: 'plant3', waterAfter: 9 });
  });
  describe('GET /plants', () => {
    it('responds with all plants', async () => {
      const res = await request(app).get('/api/plants');
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(3);
    });
    it('responds with plants in order by PK', async () => {
      const res = await request(app).get('/api/plants');
      for (let i = 0; i < res.body.length; ++i) {
        expect(res.body[i].id).to.equal(i + 1);
      }
    });
    it('plants on response include schedules', async () => {
      const res = await request(app).get('/api/plants');
      for (let i = 0; i < res.body.length; ++i) {
        const plant = await Plant.findByPk(i + 1);
        expect(res.body[i].schedule).to.deep.equal(plant.getSchedule());
      }
    });
  });
  describe('PUT /plants/:id', () => {
    const plantId = 1;
    const requestBody = { dateToToggle: 'Monday December 16, 2019' };
    it('responds with the correct plant by id', async () => {
      const res = await request(app)
        .put(`/api/plants/${plantId}`)
        .send(requestBody)
        .expect(200);

      assert.equal(res.body.name, 'plant1');
    });
    it('includes a schedule with its response', async () => {
      const res = await request(app)
        .put(`/api/plants/${plantId}`)
        .send(requestBody)
        .expect(200);

      assert.deepEqual(res.body.schedule, testPlant1.getSchedule());
    });
    it("adds a string to a plant's receivedWaterOnDates column if it is not there", async () => {
      const res = await request(app)
        .put(`/api/plants/${plantId}`)
        .send(requestBody)
        .expect(200);

      expect(res.body.receivedWaterOnDates).to.include(
        'Monday December 16, 2019'
      );
    });
    it("removes a string from a plant's receivedWaterOnDates column when it is already in the column", async () => {
      const plant = await Plant.findByPk(plantId);
      await plant.update({
        receivedWaterOnDates: ['Monday December 16, 2019'],
      });
      const res = await request(app)
        .put(`/api/plants/${plantId}`)
        .send(requestBody)
        .expect(200);
      expect(res.body.receivedWaterOnDates).not.to.include(
        'Monday December 16, 2019'
      );
    });
  });
});
