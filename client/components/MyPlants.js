import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import PlantCard from './PlantCard';
import AddPlantModal from './AddPlantModal';

const MyPlants = ({ plants }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="nav-and-page-container">
      <Navbar />
      <div id="my-plants-container">
        {plants.length ? (
          <div>
            <h1>my plants: </h1>
            {plants.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        ) : (
          <h1>You have no plants. Go get Some!</h1>
        )}
      </div>
      <div
        id="add-plant-button"
        className="btn"
        onClick={() => setShowModal(true)}
      >
        add another plant
      </div>
      {showModal && <AddPlantModal setShowModal={setShowModal} />}
    </div>
  );
};

const mapState = state => ({
  plants: state.plants,
});

export default connect(mapState)(MyPlants);
