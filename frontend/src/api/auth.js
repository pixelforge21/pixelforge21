import axios from 'axios';

const BASE_URL = "https://pixelforge21.onrender.com"; // Your backend URL

export const sendOTP = async (contact) => {
  return await axios.post(${BASE_URL}/auth/send-otp, { contact });
};

export const verifyOTP = async (contact, otp) => {
  return await axios.post(${BASE_URL}/auth/verify-otp, { contact, otp });
};

export const registerUser = async (userData) => {
  return await axios.post(${BASE_URL}/auth/register, userData);
};
