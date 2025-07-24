
Handles order placement, refund, and Razorpay.

import axiosInstance from "@/utils/api/axiosInstance";

export const createRazorpayOrder = async (amount) => {
  const response = await axiosInstance.post("/create-order", { amount });
  return response.data;
};

export const processRefund = async (payment_id, amount) => {
  const response = await axiosInstance.post("/process-refund", {
    payment_id,
    amount,
  });
  return response.data;
};

export const forwardToShiprocket = async (orderData) => {
  const response = await axiosInstance.post("/shiprocket/forward", orderData);
  return response.data;
};

