import axios from 'axios';
import swal from 'sweetalert';
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

// user action
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: 'GET_USER_REQUEST' });
  try {
    const res = await axios.get(`${URL}/api/pizzas/getallusers`);
    dispatch({ type: 'GET_USER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_USER-FAIL', payload: error });
  }
};
// delete user
export const deleteUser = (userid) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/api/pizzas/deleteuser`, { userid });
    console.log(res);
    swal('user deleted successfully');
    window.location.reload();
  } catch (error) {
    swal('user deleted error');
  }
};
