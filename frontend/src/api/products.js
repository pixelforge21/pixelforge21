import axiosInstance from "@/utils/api/axiosInstance";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export const getProductById = async (productId) => {
  const response = await axiosInstance.get(/products/${productId});
  return response.data;
};

// Optional: filter by category or search
export const searchProducts = async (query) => {
  const response = await axiosInstance.get(/products/search?q=${query});
  return response.data;
};


