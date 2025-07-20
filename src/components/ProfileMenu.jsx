import React from "react";
import { FaUser, FaBox, FaHeadset, FaTags, FaBell } from "react-icons/fa";

const ProfileMenu = ({ onSelect }) => {
  return (
    <div className="absolute top-14 right-4 w-64 bg-white shadow-lg rounded-2xl border z-50">
      <ul className="divide-y divide-gray-200">
        <li
          onClick={() => onSelect("account")}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <FaUser className="text-gray-600" />
          <span>Account Details</span>
        </li>
        <li
          onClick={() => onSelect("orders")}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <FaBox className="text-gray-600" />
          <span>My Orders</span>
        </li>
        <li
          onClick={() => onSelect("support")}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <FaHeadset className="text-gray-600" />
          <span>Customer Support</span>
        </li>
        <li
          onClick={() => onSelect("updates")}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <FaBell className="text-gray-600" />
          <span>Seller Updates</span>
        </li>
        <li
          onClick={() => onSelect("offers")}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <FaTags className="text-gray-600" />
          <span>Offers & Sales</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
