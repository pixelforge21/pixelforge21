import React from 'react';

const ProductCard = ({ product, onAddToCart }) => { return ( <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"> <img
src={product.image}
alt={product.name}
className="w-full h-48 object-cover rounded-xl"
/> <h3 className="mt-2 text-lg font-semibold">{product.name}</h3> <p className="text-gray-600">₹{product.price}</p> <button className="mt-2 w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700" onClick={() => onAddToCart(product)} > Add to Cart </button> </div> ); };

export default ProductCard;

