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
