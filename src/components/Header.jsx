import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.ico" alt="PixelForge" className="w-8 h-8" />
          <span className="text-xl font-bold text-red-600">PixelForge</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-grow mx-6 max-w-2xl">
          <SearchBar />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 relative">
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="text-gray-700 hover:text-red-600 text-2xl focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUserCircle />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white border rounded-lg shadow-md z-50">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/profile">My Account</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/orders">My Orders</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/support">Customer Support</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/offers">Offers & Sales</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/updates">Seller Updates</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button className="w-full text-left">Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="text-gray-700 hover:text-red-600 text-2xl">
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
