import React from 'react'

const Today = (props) => {
    console.log('props from Today...', props)
    const plants = props.plants
    return (
        <div>
            {
                plants && plants.map(plant => {
                    return <div key={plant.id}>{plant.name}</div>
                })
            }
        </div>
    )
}

export default Today;