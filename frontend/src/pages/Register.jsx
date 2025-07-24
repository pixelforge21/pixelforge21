import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call backend to register user
    console.log("Registering user:", form);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
        <input type="text" name="mobile" onChange={handleChange} placeholder="Mobile Number" className="w-full p-2 border rounded" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;

