import axiosInstance from "@/utils/api/axiosInstance";

export const sendSupportMessage = async (prompt) => {
  const response = await axiosInstance.post("/chat", { prompt });
  return response.data;
};

