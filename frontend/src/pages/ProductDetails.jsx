import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // fetch product using id
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Product Details</h2>
      <p className="mt-4">Details for product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;

