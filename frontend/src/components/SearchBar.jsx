import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  return (
    <div className="flex w-full max-w-lg border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-grow px-4 py-2 outline-none"
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4">
        <Search size={20} />
      </button>
    </div>
  );
}
