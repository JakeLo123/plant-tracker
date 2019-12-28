import React from 'react';
import { createDateOptions } from '../../utils';
import PlantList from './PlantList';

const Day = props => {
  let {
    togglePlantWaterStatus,
    selectedDate,
    changeSelectedDate,
    schedule,
  } = props;
  return (
    <div id="day-component">
      <select
        value={selectedDate}
        id="current-day"
        onChange={changeSelectedDate}
        className="pagination"
      >
        {createDateOptions().map(date => {
          return <option key={date}>{date}</option>;
        })}
      </select>
      {selectedDate.split(' ')[0] === 'Saturday' ||
      selectedDate.split(' ')[0] === 'Sunday' ? (
        <h2>no watering on the weekends!</h2>
      ) : (
        <PlantList
          togglePlantWaterStatus={togglePlantWaterStatus}
          selectedDate={selectedDate}
          schedule={schedule}
        />
      )}
    </div>
  );
};

export default Day;
