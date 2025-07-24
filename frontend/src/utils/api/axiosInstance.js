import axios from "axios";
baseURL:
'https://pixelforge21.onrender.com/api'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
