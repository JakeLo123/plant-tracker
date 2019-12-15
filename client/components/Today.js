import React, { useState } from 'react'
import { stringifyDate } from '../../utils'

const Today = (props) => {
    const {plants, selectedDate, schedule} = props;
    console.log('sched for ' + selectedDate, schedule[selectedDate])
    return (
        <div>
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

export default Today;