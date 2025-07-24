import React, { useState } from 'react';
import { verifyOTP } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function OTPVerify() {
  const [otp, setOTP] = useState('');
  const contact = localStorage.getItem("contact");
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const res = await verifyOTP(contact, otp);
      localStorage.setItem("token", res.data.token); // Optional
      navigate('/');
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Enter OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
        className="border p-2 w-full mt-2"
      />
      <button onClick={handleVerify} className="bg-green-600 text-white px-4 py-2 mt-3 rounded">
        Verify OTP
      </button>
    </div>
  );
}

export default OTPVerify;
