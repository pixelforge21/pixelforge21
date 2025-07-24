import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function SidebarMenu({ open, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/products" onClick={onClose}>Products</Link>
          <Link to="/cart" onClick={onClose}>Cart</Link>
          <Link to="/support" onClick={onClose}>Support</Link>
          <Link to="/profile" onClick={onClose}>Profile</Link>
        </nav>
      </div>
    </>
  );
}
