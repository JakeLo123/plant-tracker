import React from 'react';
import DayList from './DayList';

const Week = props => {
    const { togglePlantWaterStatus, schedule, selectedWeek } = props;
    return (
        <div>
            <h1 id="week-of">week of {selectedWeek[0]}</h1>
            <div className="selected-week-container">
                {selectedWeek && selectedWeek.map((day) => {
                    const dayOfWeek = day.split(' ')[0]
                    return (
                        <div className="small-day-list" key={day}>
                            <h4>{dayOfWeek}</h4>
                            <DayList togglePlantWaterStatus={togglePlantWaterStatus} selectedDate={day} schedule={schedule} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Week