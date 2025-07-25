// src/utils/axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true, // Include cookies if needed (for auth/session APIs)
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
