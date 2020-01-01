import React, { useState } from 'react';

const AddPlant = ({ addPlant }) => {
  const [name, setName] = useState('');
  const [waterAfter, setWaterAfter] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleWaterAfterChange = e => {
    setWaterAfter(e.target.value);
  };
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addPlant({ name, waterAfter });
      }}
      type="submit"
      id="add-plant-form"
    >
      <div>
        <label htmlFor="name">name</label>
        <input onChange={handleNameChange} name="name" type="text" />
      </div>
      <div>
        <label htmlFor="waterAfter">water after</label>
        <input
          onChange={handleWaterAfterChange}
          name="waterAfter"
          type="text"
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default AddPlant;
