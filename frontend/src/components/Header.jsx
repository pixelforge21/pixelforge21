import React from 'react'; import { Link } from 'react-router-dom';

const Header = () => { return ( <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between"> <Link to="/" className="text-2xl font-bold text-pink-600"> PixelForge </Link> <nav className="flex space-x-4"> <Link to="/products" className="hover:text-pink-600">Products</Link> <Link to="/cart" className="hover:text-pink-600">Cart</Link> <Link to="/profile" className="hover:text-pink-600">Profile</Link> </nav> </header> ); };

export default Header;


