
import React, { useState } from "react";

const OTPVerify = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Verify OTP logic
    console.log("Verifying OTP:", otp);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 shadow bg-white rounded">
      <h2 className="text-lg font-bold mb-4 text-center">OTP Verification</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Verify</button>
      </form>
    </div>
  );
};

export default OTPVerify;

