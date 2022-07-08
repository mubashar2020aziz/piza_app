import axios from 'axios';
const URL = 'http://localhost:1000';

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: 'PLACE_ORDER_REQUEST' });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const res = await axios.post(`${URL}/api/pizzas/placeorder`, {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: 'PLACE_ORDER_SUCCESS', payload: res.data });
    console.log(res);
  } catch (error) {
    dispatch({ type: 'PLACE_ORDER_FAIL', payload: error });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: 'USER_ORDER_REQUEST' });
  try {
    const res = await axios.post(`${URL}/api/pizzas/getuserorder`, {
      userid: currentUser._id,
    });
    console.log(res);
    dispatch({ type: 'USER_ORDER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'USER_ORDER_FAIL', payload: error });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  dispatch({ type: 'ALL_ORDER_REQUEST' });
  try {
    const res = await axios.get(`${URL}/api/pizzas/alluserorder`);
    dispatch({ type: 'ALL_ORDER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ALL_ORDER_FAIL' });
  }
};
