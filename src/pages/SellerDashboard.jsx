import React, { useState } from 'react';

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    margin: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({ name: '', price: '', margin: '', description: '', image: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Seller Dashboard</h1>

      {/* Product Upload Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Selling Price"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="margin"
            value={formData.margin}
            onChange={handleChange}
            placeholder="Margin % or Amount"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload Product
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Uploaded Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products uploaded yet.</p>
        ) : (
          <ul className="space-y-4">
            {products.map((p, idx) => (
              <li key={idx} className="border p-4 rounded flex gap-4 items-center">
                <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p>₹{p.price}</p>
                  <p className="text-sm text-gray-500">{p.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Placeholder: AI Customer Queries */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Customer Support Queries (AI)</h2>
        <p className="text-gray-500">This section will show customer queries from the chatbot.</p>
      </div>
    </div>
  );
};

export default SellerDashboard;
