import React from 'react';
import { useParams } from 'react-router-dom';

const dummyProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    image: '/assets/products/headphones.jpg',
    description: 'High-quality wireless headphones with noise cancellation and long battery life.',
    price: '₹1,499',
    stock: true,
  },
  {
    id: '2',
    name: 'Bluetooth Speaker',
    image: '/assets/products/speaker.jpg',
    description: 'Compact portable speaker with powerful bass and Bluetooth 5.0.',
    price: '₹999',
    stock: true,
  },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = dummyProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 md:flex gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h1>
          <p className="text-red-600 text-xl font-semibold mb-4">{product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className={mb-4 ${product.stock ? 'text-green-600' : 'text-red-600'}}>
            {product.stock ? 'In Stock' : 'Out of Stock'}
          </p>

          <div className="flex gap-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
