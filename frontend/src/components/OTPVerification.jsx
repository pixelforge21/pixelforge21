import React, { useState } from 'react';

const OTPVerification = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      onVerify(otp);
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto space-y-4">
      <h2 className="text-lg font-semibold text-center">Enter OTP</h2>
      <input
        type="text"
        maxLength="6"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full border p-2 rounded text-center"
        placeholder="123456"
        required
      />
      <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700">
        Verify
      </button>
    </form>
  );
};

export default OTPVerification;
