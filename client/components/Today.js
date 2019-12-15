import React, { useState } from 'react'
import {parseDate} from '../../utils'

const Today = (props) => {
    const [date, setDate] = useState(new Date('December 16, 2019'))
    const parsedDate = parseDate(date);
    const plants = props.plants
    return (
        <div>
            {
                plants && plants.map(plant => {
                    if(plant.schedule.includes(parsedDate)){
                        return <div key={plant.id}>{plant.name}</div>
                    }
                })
            }
        </div>
    )
}

export default Today;