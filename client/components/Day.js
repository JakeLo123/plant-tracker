import React, { useState } from 'react'
import { stringifyDate, getNextDay } from '../../utils'

const Day = (props) => {
    let {plants, selectedDate, schedule} = props;
    const todaysDate = stringifyDate(new Date())
    return (
        <div id="day-component">
            <h1>
                {
                    selectedDate === todaysDate
                    ? 'Today'
                    : selectedDate
                }
            </h1>
            {
                schedule[selectedDate] && schedule[selectedDate].length 
                    ? (schedule[selectedDate].map(plant => {
                        return <div key={plant.id}>{plant.name}</div>
                    })) : (
                        <div>no plants need watering today...</div>
                    )
            }
        </div>
    )
}

export default Day;