import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";

const Header = () => {
  return (
    <header className="bg-red-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/favicon.ico" alt="PixelForge" className="h-8 w-8" />
          <span>PixelForge</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for Products"
            className="w-full px-4 py-2 rounded focus:outline-none text-black"
          />
        </div>

        {/* Right Options */}
        <div className="flex items-center gap-6">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/cart" className="relative">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs rounded-full px-1 font-bold">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
