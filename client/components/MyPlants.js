import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import PlantCard from './PlantCard';
import AddPlantModal from './AddPlantModal';

const MyPlants = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="nav-and-page-container">
      <Navbar />
      <div id="my-plants-container">
        <h1>my plants: </h1>
        {props.plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
      <div
        id="add-plant-button"
        className="btn"
        onClick={() => setShowModal(true)}
      >
        add another plant
      </div>
      {showModal && <AddPlantModal />}
    </div>
  );
};

const mapState = state => ({
  plants: state.plants,
});

export default connect(mapState)(MyPlants);
