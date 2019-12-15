import React, {useEffect, useState} from 'react';
import {Header, Today} from './components';
import axios from 'axios';

function Main () {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        const fetchPlants = () => {
            axios.get('/api/plants')
                .then(res => {
                    let d = res.data;
                    setPlants(d)
                    console.log('data...', plants)
                })
                .catch(e => {
                    console.log('error fetching plants...', e)
                })
        }
        fetchPlants();
    }, [])
    return (
        <div>
            <Header />
            {/* {
                plants.map(plant => (
                    <div key={plant.id} >{plant.name}</div>
                ))
            } */}
            <Today plants={plants}/>
        </div>
    )
}

export default Main;