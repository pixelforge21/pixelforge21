import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full max-w-xl mx-auto bg-white rounded-2xl shadow-sm px-3 py-2">
      <input
        type="text"
        placeholder="Search for products, categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-2 py-1 outline-none text-sm bg-transparent"
      />
      <button
        type="submit"
        className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full transition"
      >
        <FaSearch size={16} />
      </button>
    </form>
  );
};

export default SearchBar;
