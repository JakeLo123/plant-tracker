import React from 'react';
import { addNewPlantThunk } from '../store/plants';
import { connect } from 'react-redux';
import useValidation from './forms/useValidation';
import validatePlantData from './forms/validatePlantData';

const INITIAL_STATE = {
  name: '',
  waterAfter: 3,
};

const AddPlantModal = props => {
  const { setShowModal, addNewPlant } = props;
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    loading,
  } = useValidation(INITIAL_STATE, validatePlantData, addPlant);

  function addPlant() {
    try {
      addNewPlant(values);
      setShowModal(false);
    } catch (err) {
      console.error('could not submit new plant', err);
    }
  }

  return (
    <div id="add-plant-modal" className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>New plant</h2>
        <div onClick={() => setShowModal(false)} className="hide-modal btn">
          X
        </div>
        <label htmlFor="name">plant name</label>
        <input
          className={errors.name && 'error-input'}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="name"
        />
        {errors.name && <p className="error-msg">{errors.name}</p>}
        <label id="water-after-input" htmlFor="waterAfter">
          water after{'  '}
          <input
            className={errors.waterAfter && 'error-input'}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            name="waterAfter"
          />
          {'  '}
          days
        </label>
        {errors.waterAfter && <p className="error-msg">{errors.waterAfter}</p>}
        <button type="submit" disabled={loading}>
          submit
        </button>
      </form>
    </div>
  );
};

const mapDispatch = dispatch => ({
  addNewPlant: newPlant => dispatch(addNewPlantThunk(newPlant)),
});

export default connect(null, mapDispatch)(AddPlantModal);
