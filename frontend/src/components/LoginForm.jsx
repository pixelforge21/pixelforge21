import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => { const [mobile, setMobile] = useState('');

return ( <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow"> <h2 className="text-xl font-semibold mb-4">Login via Mobile</h2> <input type="text" placeholder="Enter mobile number" className="w-full border p-2 rounded mb-4" value={mobile} onChange={(e) => setMobile(e.target.value)} /> <button onClick={() => onSubmit(mobile)} className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700" > Send OTP </button> </div> ); };

export default LoginForm;

