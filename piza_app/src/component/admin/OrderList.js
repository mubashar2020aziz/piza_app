import React, { useEffect } from 'react';
import { getAllOrders } from '../../redux/actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './../Loader';
import Error from './../Error';

const OrderList = () => {
  const dispatch = useDispatch();
  const allOrderState = useSelector((state) => state.allUserOrderReducer);
  const { loading, error, orders } = allOrderState;
  console.log(orders);
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
    <>
      <h3>orderList</h3>
      {loading && <Loader />}
      {error && <Error error="something admin error in all order" />}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">order Id</th>
            <th scope="col">Email</th>
            <th scope="col">User Id</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {orders &&
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>{order.transactionid}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.isDelivered}</td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </>
  );
};

export default OrderList;
