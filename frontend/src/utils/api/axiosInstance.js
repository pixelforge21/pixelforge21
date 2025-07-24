import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pixelforge21.onrender.com", // Backend root URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

