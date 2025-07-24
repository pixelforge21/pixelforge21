import React from "react";
import { X } from "lucide-react";

const SidebarMenu = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose}>
          <X />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default SidebarMenu;
