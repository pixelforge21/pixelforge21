
import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    address: "123 Street, City",
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">My Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
};

export default Profile;

