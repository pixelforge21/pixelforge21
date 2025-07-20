import React, { useState } from 'react';

const Login = () => {
  const [step, setStep] = useState(1); // 1: Enter Email & Mobile, 2: Enter OTPs
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  const [mobileOtp, setMobileOtp] = useState('');

  const handleNext = () => {
    if (email && mobile) {
      // Trigger OTP generation via backend here
      setStep(2);
    } else {
      alert('Please enter both email and mobile number.');
    }
  };

  const handleVerify = () => {
    // Verify OTPs via backend
    alert('Logged in successfully (mock)!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">PixelForge Login</h2>

        {step === 1 && (
          <>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <label className="block mb-2 font-medium">Mobile Number</label>
            <input
              type="tel"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile number"
            />

            <button
              onClick={handleNext}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl mt-4"
            >
              Send OTPs
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block mb-2 font-medium">Email OTP</label>
            <input
              type="text"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
              value={emailOtp}
              onChange={(e) => setEmailOtp(e.target.value)}
              placeholder="Enter email OTP"
            />

            <label className="block mb-2 font-medium">Mobile OTP</label>
            <input
              type="text"
              className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
              value={mobileOtp}
              onChange={(e) => setMobileOtp(e.target.value)}
              placeholder="Enter mobile OTP"
            />

            <button
              onClick={handleVerify}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl mt-4"
            >
              Verify & Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
