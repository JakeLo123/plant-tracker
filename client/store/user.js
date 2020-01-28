import axios from 'axios';
import { getUsersPlantsThunk } from './plants';

const initialUser = {};

// constants
const FETCH_USER = 'FETCH_USER';
const AUTHORIZE = 'AUTHORIZE';
const LOGOUT_USER = 'LOGOUT_USER';

// action creators
const getUser = user => ({
  type: FETCH_USER,
  user,
});
const authorize = user => ({
  type: AUTHORIZE,
  user,
});
const logoutUser = () => ({
  type: LOGOUT_USER,
});

// thunk creators
export const getUserThunk = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me');
    const user = res.data;
    if (user.id) {
      dispatch(getUser(user));
      dispatch(getUsersPlantsThunk(user.id));
    }
  } catch (e) {
    console.error(e);
  }
};

export const authorizeThunk = (data, method) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, data);
    const user = res.data;
    dispatch(authorize(user));
    if (user) dispatch(getUsersPlantsThunk(user.id));
  } catch (e) {
    console.error(e);
  }
};

export const logoutUserThunk = () => async dispatch => {
  try {
    await axios.delete('/auth/logout');
    dispatch(logoutUser());
  } catch (e) {
    console.error(e);
  }
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.user;
    case AUTHORIZE:
      return action.user;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};
export default userReducer;
