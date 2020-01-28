import React from 'react';

const PlantCard = props => {
  const { name, waterAfter } = props.plant;
  return (
    <div className="plant-card">
      <h2 className="plant-card-title">{name}</h2>
      <div className="plant-card-body">water after {waterAfter} days</div>
      <div className="edit-details btn">edit details</div>
    </div>
  );
};

export default PlantCard;
