import React, { useEffect } from 'react';
import { getUserOrders } from '../redux/actions/orderAction';
import Loader from '../component/Loader';
import Error from '../component/Error';

import { useDispatch, useSelector } from 'react-redux';

const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrderReducer);
  console.log(orderState);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <>
      <h4 className="text-center my-2">OrderScreen</h4>
      {loading && <Loader />}
      {error && <Error error="something went wronge" />}

      {orders &&
        orders.map((order) => (
          <div className="container bg-light ">
            <div className="row">
              <div className="col-md-4">
                {order.orderItems.map((item) => (
                  <div>
                    <h6>
                      {item.name} {item.varient} / {item.quantity} ={item.price}
                    </h6>
                  </div>
                ))}
              </div>
              <div className="col-md-4">
                <h4>Address</h4>
                <h6>Street: {order.shippingAddress.street}</h6>
                <h6>City: {order.shippingAddress.city}</h6>
                <h6>PinCode: {order.shippingAddress.pincode}</h6>
                <h6>Country: {order.shippingAddress.country}</h6>
              </div>

              <div className="col-md-4">
                <h4>Order Info: Order Amount :RS::{order.orderAmount}</h4>
                <h6>transactionid::{order.transactionid}</h6>
                <h6>Order Id::{order._id}</h6>
              </div>
              <hr />
            </div>
          </div>
        ))}
    </>
  );
};

export default OrderScreen;
