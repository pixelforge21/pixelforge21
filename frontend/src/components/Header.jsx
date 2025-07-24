import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-pink-600">PixelForge</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-pink-600">Home</Link>
        <Link to="/cart" className="hover:text-pink-600">Cart</Link>
        <Link to="/profile" className="hover:text-pink-600">Profile</Link>
        <Link to="/support" className="hover:text-pink-600">Support</Link>
      </nav>
    </header>
  );
};

export default Header;

