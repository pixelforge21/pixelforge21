import React from "react";
import { useCart } from "../context/CartContext"; // assumes you’ll manage cart via context
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">My Cart</h2>

      {cartItems.length === 0 ? (
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold mb-2">
              Total: ₹{getTotalPrice()}
            </h3>
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
