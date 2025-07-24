import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex items-center w-full max-w-xl mx-auto px-4 py-2">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="bg-red-500 text-white px-4 py-2 rounded-r-full">
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;
