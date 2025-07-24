import React from 'react';

const CartItem = ({ item, onRemove }) => { return ( <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow mb-2"> <div className="flex items-center space-x-4"> <img
src={item.image}
alt={item.name}
className="w-16 h-16 object-cover rounded-lg"
/> <div> <h4 className="font-semibold">{item.name}</h4> <p className="text-gray-500">₹{item.price}</p> </div> </div> <button className="text-red-500 hover:underline" onClick={() => onRemove(item.id)} > Remove </button> </div> ); };

export default CartItem;
