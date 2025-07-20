import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ProfileMenu from './components/ProfileMenu';
import SearchBar from './components/SearchBar';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Support from './pages/Support';
import MyOrders from './pages/MyOrders';
import ProductDetails from './pages/ProductDetails';
import SellerDashboard from './pages/SellerDashboard';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/support" element={<Support />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
