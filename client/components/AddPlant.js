import React from 'react';

const AddPlant = () => {
  return (
    <form type="submit" id="add-plant-form">
      <div>
        <label htmlFor="name">name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="water-after">water after</label>
        <input type="text" />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default AddPlant;
