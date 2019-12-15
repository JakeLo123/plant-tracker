import React, { useState } from 'react'

const Today = (props) => {
    const [date, setDate] = useState(new Date('December 16, 2019'))
    const plants = props.plants
    return (
        <div>
            {
                plants && plants.map(plant => {
                    // if(plant.schedule.includes(date))
                    return <div key={plant.id}>{plant.name}</div>
                })
            }
        </div>
    )
}

export default Today;