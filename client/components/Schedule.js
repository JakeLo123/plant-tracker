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
  return (
    <div className="nav-and-page-container">
      <Navbar />
      <div id="schedule-container">
        <h1>schedule...</h1>
      </div>
    </div>
  );
};

const mapState = state => ({
  plants: state.plants,
});

export default connect(mapState)(Schedule);
