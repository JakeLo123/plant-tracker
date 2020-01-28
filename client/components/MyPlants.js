import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const MyPlants = props => {
  return (
    <div className="nav-and-page-container">
      <Navbar />
      <div id="my-plants-container">
        <h1>my plants: </h1>
        {props.plants.map(plant => (
          <h3 key={plant.id}>{plant.name}</h3>
        ))}
      </div>
    </div>
  );
};

const mapState = state => ({
  plants: state.plants,
});

export default connect(mapState)(MyPlants);
