import React from 'react';
import PlantList from './PlantList';

const Week = props => {
    const { togglePlantWaterStatus, schedule, selectedWeek } = props;
    return (
        <div>
            <h1 id="week-of">week of {selectedWeek[0]}</h1>
            <div className="selected-week-container">
                {selectedWeek && selectedWeek.map((day) => {
                    const dayOfWeek = day.split(' ')[0]
                    return (
                        <div className="small-plant-list" key={day}>
                            <h4>{dayOfWeek}</h4>
                            <PlantList togglePlantWaterStatus={togglePlantWaterStatus} selectedDate={day} schedule={schedule} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Week