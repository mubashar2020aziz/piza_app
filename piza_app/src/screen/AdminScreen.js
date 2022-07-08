import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminScreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (localStorage.getItem('currentUser') === null || currentUser.isAdmin) {
      window.location.href = '/';
    }
  });
  return (
    <>
      <div className="container py-3">
        <h4
          className="text-center bg-dark text-light "
          style={{ borderRadius: '20px' }}
        >
          Admin Panel
        </h4>
        <div className="row">
          <div className="col-md-4 text-center col-12">
            <div
              className="btn-group-vertical"
              style={{
                minHeight: '400px',
                borderRadius: '10px',
                minWidth: '100px',
              }}
            >
              <Link
                to="userlist"
                className="btn btn-warning "
                style={{ borderRadius: '20px' }}
              >
                All Users
              </Link>

              <Link
                to="pizzalist"
                className="btn btn-success"
                style={{ borderRadius: '20px' }}
              >
                All Pizzas
              </Link>
              <Link
                to="addnewpizza"
                className="btn btn-primary"
                style={{ borderRadius: '20px' }}
              >
                Add New Pizzas
              </Link>
              <Link
                to="orderlist"
                className="btn btn-secondary"
                style={{ borderRadius: '20px' }}
              >
                All Orders
              </Link>
            </div>
          </div>
          <div className="col-md-8 col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminScreen;
