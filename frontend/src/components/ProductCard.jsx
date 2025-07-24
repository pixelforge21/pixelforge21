import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products?.length) {
    return <div className="text-center py-10 text-gray-500">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

