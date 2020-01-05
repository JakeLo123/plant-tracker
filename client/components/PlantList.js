import React from 'react';

const PlantList = props => {
  const { togglePlantWaterStatus, selectedDate, schedule } = props;
  return (
    <div id="plant-list-container">
      {schedule[selectedDate] && schedule[selectedDate].length ? (
        schedule[selectedDate].map(plant => {
          const water = plant.receivedWaterOnDates.includes(selectedDate)
            ? 'needs-no-water'
            : 'needs-water';
          return (
            <div
              key={plant.id}
              className={`plant ${water}`}
              onClick={() => togglePlantWaterStatus(plant.id, selectedDate)}
            >
              {plant.name}
            </div>
          );
        })
      ) : (
        <div className="plant" id="no-plants">
          no plants need watering...
        </div>
      )}
    </div>
  );
};

export default PlantList;
