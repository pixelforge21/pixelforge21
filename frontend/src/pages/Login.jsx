import React, { useState } from 'react';
import { sendOTP } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [contact, setContact] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      await sendOTP(contact);
      localStorage.setItem("contact", contact);
      navigate('/verify');
    } catch (err) {
      alert("Error sending OTP");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        type="text"
        placeholder="Email or Mobile"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="border p-2 w-full mt-2"
      />
      <button onClick={handleSendOTP} className="bg-blue-600 text-white px-4 py-2 mt-3 rounded">
        Send OTP
      </button>
    </div>
  );
}

export default Login;
