import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    const res = await fetch("https://pixelforge21.onrender.com/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) setOtpSent(true);
  };

  const verifyOtp = async () => {
    const res = await fetch("https://pixelforge21.onrender.com/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {!otpSent ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 w-full mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={sendOtp}
              className="bg-blue-500 text-white px-4 py-2 w-full rounded"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="border px-4 py-2 w-full mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={verifyOtp}
              className="bg-green-500 text-white px-4 py-2 w-full rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

