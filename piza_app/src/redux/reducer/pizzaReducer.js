export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case 'GET_PIZZA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_PIZZA_SUCCESS':
      return {
        pizzas: action.payload,
        loading: false,
      };
    case 'GET_PIZZA_FAIL':
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_PIZZA-SUCCESS':
      return {
        loading: false,
        success: true,
      };
    case 'ADD_PIZZA-FAIL':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PIZZABYID_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_PIZZABYID_SUCCESS':
      return {
        loading: false,
        // success: true,
        pizza: action.payload,
      };
    case 'GET_PIZZABYID_FAIL':
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
