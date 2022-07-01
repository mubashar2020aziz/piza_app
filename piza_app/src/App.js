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

const App = () => {
  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/policy" element={<Policy />} />
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
