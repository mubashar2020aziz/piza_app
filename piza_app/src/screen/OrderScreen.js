import React, { useEffect } from 'react';
import { getUserOrders } from '../redux/actions/orderAction';
// import Loader from '../component/Loader';
// import Error from '../component/Error';

import { useDispatch, useSelector } from 'react-redux';

const OrderScreen = () => {
  // const orderState = useSelector((state) => state.getOrderUserReducer);
  // const { loading, error, orders } = orderState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <>
      <div>OrderScreen</div>
      {/* {loading && <Loader />}
      {error && <Error error="something went wronge" />}

      {orders &&
        orders.map((order) => (
          <div className="row">
            <div className="col-md-4">
              {order.orderItems.map((item) => (
                <div>
                  <h1>
                    {item.name} {item.varient} / {item.quantity} = {item.price}
                  </h1>
                </div>
              ))}
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        ))} */}
    </>
  );
};

export default OrderScreen;
