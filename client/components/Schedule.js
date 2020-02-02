import React, { useState } from 'react';
import {
  stringifyDate,
  makeScheduleFromPlants,
  createDateOptions,
} from '../../utils';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const Schedule = ({ plants }) => {
  const [selectedDay, setSelectedDay] = useState(stringifyDate(new Date()));
  const schedule = makeScheduleFromPlants(plants);
  const dates = createDateOptions();

  return (
    <div className="nav-and-page-container">
      <Navbar />
      <div id="schedule-container">
        <h1>schedule</h1>
        <select onChange={e => setSelectedDay(e.target.value)}>
          {dates.map(date => {
            return (
              <option key={date} value={date}>
                {date}
              </option>
            );
          })}
        </select>
        <PlantList selectedDay={selectedDay} schedule={schedule} />
      </div>
    </div>
  );
};

const mapState = state => ({
  plants: state.plants,
});

const PlantList = ({ selectedDay, schedule }) => {
  return (
    <div>
      {schedule[selectedDay] &&
        schedule[selectedDay].map(plant => (
          <div key={plant.id}>{plant.name}</div>
        ))}
    </div>
  );
};

export default connect(mapState)(Schedule);
