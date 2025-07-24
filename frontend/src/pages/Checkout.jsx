import React from "react";

const Checkout = () => {
  const handlePlaceOrder = () => {
    // TODO: Trigger Razorpay payment flow
    console.log("Initiating checkout...");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="space-y-4">
        {/* TODO: Show order summary */}
        <div className="border p-4 rounded">Order Summary Placeholder</div>
        <button onClick={handlePlaceOrder} className="w-full bg-black text-white py-2 rounded">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;

