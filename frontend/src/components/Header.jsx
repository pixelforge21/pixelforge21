// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600">
          PixelForge21
        </Link>

        {/* Search bar */}
        <div className="flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-red-600 text-white px-4 rounded-r-md">
            Search
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center space-x-4 text-sm font-medium">
          <Link to="/login" className="hover:text-red-600">
            Login
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/signup" className="hover:text-red-600">
            Sign Up
          </Link>
          <Link to="/cart" className="hover:text-red-600">
            Cart
          </Link>
          <Link to="/profile" className="hover:text-red-600">
            Profile
          </Link>
          <Link to="/support" className="hover:text-red-600">
            Support
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
