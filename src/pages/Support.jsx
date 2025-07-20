import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Support</h2>
        <p className="text-gray-600 text-center mb-6">
          Welcome to PixelForge Support. Ask your queries below and our AI Assistant will help you!
        </p>

        {/* Placeholder Chat UI */}
        <div className="bg-gray-50 p-4 rounded border mb-4 h-64 overflow-y-auto">
          <p className="text-sm text-gray-500">[AI Chatbot UI will appear here in future]</p>
        </div>

        <input
          type="text"
          placeholder="Type your query here..."
          className="w-full p-3 border rounded mb-2"
          disabled
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded cursor-not-allowed" disabled>
          Send (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default Support;
