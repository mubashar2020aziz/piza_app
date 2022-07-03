import React from 'react';
import {
  //   BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import AddNewPizzaslist from '../component/admin/AddNewPizzaslist';
import OrderList from '../component/admin/OrderList';
import PizzasList from '../component/admin/PizzasList';
import UserList from '../component/admin/UserList';

const AdminScreen = () => {
  const history = useNavigate();
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
          <div className="col-md-4 ">
            <div
              class="btn-group-vertical"
              style={{
                minHeight: '400px',
                borderRadius: '10px',
                minWidth: '100px',
              }}
            >
              <button
                className="btn btn-warning"
                onClick={() => history('/admin/userlist')}
              >
                All Users
              </button>
              <button
                className="btn btn-success"
                onClick={() => history('/admin/pizzalist')}
              >
                All Pizzas
              </button>
              <button
                className="btn btn-primary"
                onClick={() => history('/admin/addnewpizza')}
              >
                Add New Pizzas
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => history('/admin/orderlist')}
              >
                All Orders
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <Routes>
              <Route exact path="/admin/userlist" element={<UserList />} />
              <Route exact path="/admin/pizzalist" element={<PizzasList />} />
              <Route
                exact
                path="/admin/addnewpizza"
                element={<AddNewPizzaslist />}
              />
              <Route exact path="/admin/orderlist" element={<OrderList />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminScreen;
