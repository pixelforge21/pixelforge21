export default function CategoryBar({ categories = [], onSelect }) {
  return (
    <div className="overflow-x-auto flex space-x-4 py-3 px-4 bg-gray-100">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-4 py-1 rounded-full bg-white shadow text-sm hover:bg-blue-500 hover:text-white"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
