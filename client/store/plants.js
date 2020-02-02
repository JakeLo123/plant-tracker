import axios from 'axios';

const initialState = [];

// constants
const FETCH_USERS_PLANTS = 'FETCH_USERS_PLANTS';
const NEW_PLANT = 'NEW_PLANT';

// action creators
const getUsersPlants = plants => ({
  type: FETCH_USERS_PLANTS,
  plants,
});
const addNewPlant = newPlant => ({
  type: NEW_PLANT,
  newPlant,
});

// thunk creators
export const getUsersPlantsThunk = userId => async dispatch => {
  try {
    const res = await axios.get('/api/plants/' + userId);
    const plants = res.data;
    dispatch(getUsersPlants(plants));
  } catch (e) {
    console.error(e);
  }
};
export const addNewPlantThunk = newPlant => async dispatch => {
  try {
    const res = await axios.post('/api/plants/add', newPlant);
    dispatch(addNewPlant(res.data));
  } catch (e) {
    console.error(e);
  }
};

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PLANTS:
      return action.plants;
    case NEW_PLANT:
      return [...state, action.newPlant];
    default:
      return state;
  }
};

export default plantsReducer;
