import React, { useState } from 'react';
import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    address: '',
    email: '',
    mobile: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await registerUser(form);
      alert("Registered successfully");
      navigate('/login');
    } catch (e) {
      alert("Error registering");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Register</h2>
      <input className="border p-2 w-full mt-2" placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} />
      <input className="border p-2 w-full mt-2" placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input className="border p-2 w-full mt-2" placeholder="Mobile" onChange={(e) => setForm({...form, mobile: e.target.value})} />
      <input className="border p-2 w-full mt-2" placeholder="Address" onChange={(e) => setForm({...form, address: e.target.value})} />
      <input className="border p-2 w-full mt-2" placeholder="Gender" onChange={(e) => setForm({...form, gender: e.target.value})} />
      <button onClick={handleSubmit} className="bg-purple-600 text-white px-4 py-2 mt-3 rounded">
        Register
      </button>
    </div>
  );
}

export default Register;
