import React, { useState } from "react";

const Support = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: message }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">AI Customer Support</h2>
      <textarea
        rows={4}
        className="w-full border p-2 rounded"
        placeholder="How can we help you?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded" onClick={handleSend}>
        Ask
      </button>
      {response && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <strong>AI:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default Support;

