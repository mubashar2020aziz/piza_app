import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Checkout from '../component/Checkout';
import { addToCart, deleteFromCart } from '../redux/actions/cartAction';
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;

  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1>CartItems</h1>
            <div className="row mx-auto">
              {cartItems.map((item) => (
                <>
                  <div className="col-md-7 col-12">
                    <h6>
                      {item.name} [{item.varient}]
                    </h6>
                    Price:{item.quantity}*{item.prices[0][item.varient]} =
                    {item.price}
                    <h6>
                      Quantity :
                      <i
                        className="fas fa-minus-square text-danger"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      ></i>
                      &nbsp;
                      {item.quantity}&nbsp;
                      <i
                        className="fas fa-plus-square text-success"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      ></i>
                    </h6>
                  </div>
                  <div className="col-md-5 col-12">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '10px',
                        marginBottom: '10px',
                      }}
                    />
                    &nbsp;
                    <i
                      className="fas fa-trash text-danger"
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch(deleteFromCart(item))}
                    ></i>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h1>Payment</h1>
            <div className="card">
              <button className="btn btn-success">
                Place Your Order And Pay
              </button>
              <h4>SubTotal</h4>
              <h6>RS :{subTotal} /-</h6>

              <button className="btn btn-warning">
                <Checkout subTotal={subTotal} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
