import axios from 'axios';
const URL = 'http://localhost:1000';

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: 'USER_REGISTER_REQUEST' });
  try {
    const res = await axios.post(`${URL}/api/pizzas/register`, user);
    dispatch({ type: 'USER_REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'USER_REGISTER_ERROR', payload: error });
  }
};

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: 'USER_LOGIN_REQUEST' });
  try {
    const res = await axios.post(`${URL}/api/pizzas/login`, user);
    console.log(res);
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.data });
    localStorage.setItem('currentUser', JSON.stringify(res.data));
    window.location.href = '/';
  } catch (error) {
    dispatch({ type: 'USER_LOGIN_FAIL', payload: error });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem('currentUser');
  window.location.href = ' /login';
};
