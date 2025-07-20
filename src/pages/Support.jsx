// src/components/Support.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Support = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setConversation([...conversation, userMsg]);
    setInput('');

    try {
      const res = await axios.post('http://localhost:5000/chat', {
        message: input,
      });

      const aiMsg = { role: 'ai', text: res.data.reply };
      setConversation((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      const errMsg = { role: 'ai', text: 'Something went wrong. Please try again later.' };
      setConversation((prev) => [...prev, errMsg]);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">AI Customer Support</h2>
      <div className="bg-white h-96 overflow-y-auto border rounded p-4 mb-4">
        {conversation.map((msg, i) => (
          <div key={i} className={mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}}>
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-200'
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          placeholder="Ask something..."
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default Support;
