import axios from 'axios';

const initialState = [];

// constants
const FETCH_USERS_PLANTS = 'FETCH_USERS_PLANTS';

// action creators
const getUsersPlants = plants => ({
  type: FETCH_USERS_PLANTS,
  plants,
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

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PLANTS:
      return action.plants;
    default:
      return state;
  }
};

export default plantsReducer;
