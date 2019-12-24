import React from 'react';
import { stringifyDate, createDateOptions } from '../../utils';
import PlantList from './PlantList';

const Day = props => {
  let { togglePlantWaterStatus, selectedDate, selectDay, schedule } = props;
  //   const todaysDate = stringifyDate(new Date());
  return (
    <div id="day-component">
      <select value={selectedDate} onChange={selectDay} className="pagination">
        {/* <option>{selectedDate === todaysDate ? 'Today' : selectedDate}</option> */}
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
