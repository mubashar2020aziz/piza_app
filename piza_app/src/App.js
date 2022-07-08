import React from 'react';
import './App.css';
import Topbar from './component/Topbar';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Policy from './component/Policy';
import HomeScreen from './screen/HomeScreen';
import CartScreen from './screen/CartScreen';
import Register from './screen/Register';
import Login from './screen/Login';
import OrderScreen from './screen/OrderScreen';
import AdminScreen from './screen/AdminScreen';
import UserList from './component/admin/UserList';
import PizzasList from './component/admin/PizzasList';
import AddNewPizzaslist from './component/admin/AddNewPizzaslist';
import OrderList from './component/admin/OrderList';
import EditPiza from './component/admin/EditPiza';

const App = () => {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route exact path="/order" element={<OrderScreen />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/policy" element={<Policy />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route path="/admin" element={<AdminScreen />}>
            <Route exact path="userlist" element={<UserList />} />
            <Route exact path="pizzalist" element={<PizzasList />} />
            <Route exact path="addnewpizza" element={<AddNewPizzaslist />} />
            <Route exact path="orderlist" element={<OrderList />} />
            <Route exact path="editpizza:Id" element={<EditPiza />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
