
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../utils/api/axiosInstance';

const OTPVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [resendStatus, setResendStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email) {
      sendOtp();
    } else {
      navigate('/signup');
    }
  }, [email]);

  const sendOtp = async () => {
    setResendStatus('Sending OTP...');
    try {
      const res = await axios.post('/auth/send-otp', { email });
      if (res.data.success) {
        setResendStatus('OTP sent to your email.');
      } else {
        setResendStatus('Failed to send OTP.');
      }
    } catch (err) {
      setResendStatus('Server error while sending OTP.');
    }
  };

  const verifyOtp = async e => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const res = await axios.post('/auth/verify-otp', { email, otp });
      if (res.data.success) {
        setMessage('OTP verified! Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setError(res.data.message || 'Invalid OTP.');
      }
    } catch (err) {
      setError('Verification failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Verify OTP</h2>
      <p className="text-center text-sm text-gray-600 mb-6">{resendStatus}</p>

      {message && <p className="text-green-600 text-center mb-4">{message}</p>}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={verifyOtp} className="space-y-4">
        <input
          type="text"
          maxLength={6}
          required
          value={otp}
          onChange={e => setOtp(e.target.value)}
          placeholder="Enter 6-digit OTP"
          className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>
      </form>

      <div className="text-center mt-4">
        <button
          onClick={sendOtp}
          className="text-blue-600 hover:underline text-sm"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;

