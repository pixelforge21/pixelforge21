// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import OTPVerify from './pages/OTPVerify';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Support from './pages/Support';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<OTPVerify />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<h1 className="text-3xl">Site Works!</h1>} />
    </Routes>
  );
};

export default AppRoutes;
