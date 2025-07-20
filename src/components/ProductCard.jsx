import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition duration-200 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
      <p className="text-red-600 font-bold text-md mt-1">₹{product.price}</p>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Add to Cart
        </button>
        <button className="flex-1 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
