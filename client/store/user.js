import axios from 'axios';
import { getUsersPlantsThunk } from './plants';

const initialUser = {};

// constants
const FETCH_USER = 'FETCH_USER';

// action creators
const getUser = user => ({
  type: FETCH_USER,
  user,
});

// thunk creators
export const getUserThunk = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me');
    const user = res.data;
    dispatch(getUsersPlantsThunk(user.id));
    dispatch(getUser(user));
  } catch (e) {
    console.error(e);
  }
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
