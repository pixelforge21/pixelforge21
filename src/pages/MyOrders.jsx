import React from 'react';

const orders = [
  {
    id: 'ORD123456',
    productName: 'Wireless Headphones',
    image: '/assets/products/headphones.jpg',
    price: '₹1,499',
    status: 'Shipped',
    trackingId: 'SRK123456',
    trackingLink: 'https://track.shiprocket.in/tracking/SRK123456',
    date: '2025-07-15',
  },
  {
    id: 'ORD123457',
    productName: 'Bluetooth Speaker',
    image: '/assets/products/speaker.jpg',
    price: '₹999',
    status: 'Delivered',
    trackingId: 'SRK123457',
    trackingLink: 'https://track.shiprocket.in/tracking/SRK123457',
    date: '2025-07-12',
  },
];

const MyOrders = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-600">My Orders</h2>

      <div className="grid gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div className="flex items-start md:items-center gap-4">
              <img
                src={order.image}
                alt={order.productName}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{order.productName}</h3>
                <p className="text-gray-500 text-sm">Order ID: {order.id}</p>
                <p className="text-gray-700 mt-1">Price: {order.price}</p>
                <p className="text-sm text-gray-500">Placed on: {order.date}</p>
              </div>
            </div>

            <div className="mt-4 md:mt-0 text-right">
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full ${
                  order.status === 'Delivered'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {order.status}
              </span>

              <div className="mt-2">
                <a
                  href={order.trackingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Track Shipment
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
