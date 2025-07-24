import React, { useState } from 'react';

const OtpVerification = ({ onVerify }) => { const [otp, setOtp] = useState('');

return ( <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow"> <h2 className="text-xl font-semibold mb-4">Enter OTP</h2> <input type="text" placeholder="Enter OTP" className="w-full border p-2 rounded mb-4" value={otp} onChange={(e) => setOtp(e.target.value)} /> <button onClick={() => onVerify(otp)} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700" > Verify OTP </button> </div> ); };

export default OtpVerification;
