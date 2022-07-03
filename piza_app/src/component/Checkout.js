import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../redux/actions/orderAction';
import Loader from './Loader';
import Error from './Error';
import Success from './Success';

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="order place successfully" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LETugCqzIH0o4dDhul6zV7hnpCEmR8EJcpbSbeSot4miSeH4PBYFbGMQK7GWr1SU0tzGuIXGK8d7HuVvCpqbFfm00uVDJ5rZC"
        currency="PKR"
      >
        <button className="btn btn-warning">Pay Now</button>
      </StripeCheckout>
      ;
    </>
  );
};

export default Checkout;
