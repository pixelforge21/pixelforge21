import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && mobile) {
      onSubmit({ email, mobile });
    } else {
      alert("Both fields are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-center text-xl font-bold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="w-full border p-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        className="w-full border p-2 rounded"
        onChange={(e) => setMobile(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700">
        Send OTP
      </button>
    </form>
  );
};

export default LoginForm;
