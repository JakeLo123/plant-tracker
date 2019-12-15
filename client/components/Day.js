import React, { useState } from 'react'
import { stringifyDate, getNextDay } from '../../utils'

const Day = (props) => {
    let {togglePlantWaterStatus, selectedDate, schedule} = props;
    const todaysDate = stringifyDate(new Date())
    return (
        <div id="day-component">
            <h3>
                {
                    selectedDate === todaysDate
                    ? 'Today'
                    : selectedDate
                }
            </h3>
            {
                schedule[selectedDate] && schedule[selectedDate].length 
                    ? (schedule[selectedDate].map(plant => {
                        const water = plant.receivedWaterOnDates.includes(selectedDate) ? 'needs-no-water' : 'needs-water'
                        return (
                            <div
                                key={plant.id}
                                className={`plant ${water}`}
                                onClick={() => togglePlantWaterStatus(plant.id, selectedDate)}
                            >
                                {plant.name}
                            </div>

                        )
                    })) : (
                        <div>no plants need watering...</div>
                    )
            }
        </div>
    )
}

export default Day;