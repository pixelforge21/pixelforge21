import axiosInstance from "@/utils/api/axiosInstance";

export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/register", userData);
  return response.data;
};

export const sendOTP = async (phoneOrEmail) => {
  const response = await axiosInstance.post("/send-otp", phoneOrEmail);
  return response.data;
};

export const verifyOTP = async (otpData) => {
  const response = await axiosInstance.post("/verify-otp", otpData);
  return response.data;
};
