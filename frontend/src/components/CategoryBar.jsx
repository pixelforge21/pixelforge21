import React from "react";

const categories = ["Electronics", "Fashion", "Home", "Books", "Toys", "Beauty"];

const CategoryBar = ({ onSelectCategory }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 px-4 py-2 bg-gray-100">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className="px-4 py-1 rounded-full bg-white shadow text-sm"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
