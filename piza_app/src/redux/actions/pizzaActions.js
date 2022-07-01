import axios from 'axios';
const URL = 'http://localhost:1000';
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZA_REQUEST' });
  try {
    let res = await axios.get(`${URL}/api/pizzas/getAllpizzas`);
    console.log(res);
    dispatch({ type: 'GET_PIZZA_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_PIZZA_FAIL', payload: err });
  }
};
