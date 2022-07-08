import axios from 'axios';
import swal from 'sweetalert';
const URL = 'http://localhost:1000';
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZA_REQUEST' });
  try {
    let res = await axios.get(`${URL}/api/pizzas/getAllpizzas`);

    dispatch({ type: 'GET_PIZZA_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_PIZZA_FAIL', payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: 'ADD_PIZZA_REQUEST' });
  try {
    const res = await axios.post(`${URL}/api/pizzas/getpizza`, { pizza });

    dispatch({ type: 'ADD_PIZZA-SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ADD_PIZZA-FAIL', payload: error });
  }
};

export const getPizzaById = (Id) => async (dispatch) => {
  dispatch({ type: 'GET_PIZZABYID_REQUEST' });
  try {
    const res = await axios.post(`${URL}/api/pizzas/getpizzabyid`, { Id });
    dispatch({ type: 'GET_PIZZABYID_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_PIZZABYID_FAIL', payload: error });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/api/pizzas/deletepizza`, { pizzaId });
    console.log(res);
    swal('Good job!', 'You have deleted pizza successfully!', 'success');
    window.location.href = '/';
  } catch (error) {
    swal('Error in some while');
  }
};

export const filterPizza = (search, category) => async (dispatch) => {
  let filterdPizza;
  dispatch({ type: 'GET_PIZZAS_REQUEST' });
  try {
    const res = await axios.get(`${URL}/api/pizzas/getAllpizzas`);
    filterdPizza = res.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(search)
    );
    if (category !== 'all') {
      filterdPizza = res.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: filterdPizza });
  } catch (error) {
    dispatch({ type: 'GET_PIZZAS_FAIL', payload: error });
  }
};
