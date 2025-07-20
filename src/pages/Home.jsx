import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  // Dummy product list (replace with backend fetch later)
  useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "PixelForge T-Shirt",
        price: 499,
        image: "/images/product1.jpg",
      },
      {
        id: 2,
        title: "PixelForge Wireless Mouse",
        price: 999,
        image: "/images/product2.jpg",
      },
      {
        id: 3,
        title: "PixelForge Headphones",
        price: 1499,
        image: "/images/product3.jpg",
      },
    ]);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Promo banner */}
      <div className="w-full mb-6">
        <img
          src="/images/promo-banner.jpg"
          alt="Promo"
          className="rounded-lg w-full object-cover shadow-md"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Featured Products</h2>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Link to={/product/${product.id}}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-2 text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-red-500 font-bold mt-1">₹{product.price}</p>
            </Link>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
