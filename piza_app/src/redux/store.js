import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import redux_thunk from 'redux-thunk';
import { getAllPizzaReducer } from './reducer/pizzaReducer';
import { registerUserReducer, loginUserReducer } from './reducer/userReducer';
import { cartReducer } from './reducer/cartReducer';
import { placeOrderReducer } from './reducer/orderReducer';

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
});
const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

const middleware = [redux_thunk];
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
