import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/favicon.ico"
            alt="PixelForge Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-red-600">PixelForge</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-6">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-3 py-2 outline-none"
            />
            <button className="bg-red-500 text-white px-4 py-2">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-gray-600">
          <div className="cursor-pointer hover:text-red-600 flex items-center gap-1">
            <FaUser />
            <span className="hidden sm:inline">Sign In</span>
          </div>
          <div className="cursor-pointer hover:text-red-600 flex items-center gap-1">
            <FaShoppingCart />
            <span className="hidden sm:inline">Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
