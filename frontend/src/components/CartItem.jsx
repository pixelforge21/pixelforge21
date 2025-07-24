import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
          <p className="text-sm text-gray-800">₹{item.price}</p>
        </div>
      </div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

