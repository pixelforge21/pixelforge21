import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryBar from "../components/CategoryBar";
import ProductGrid from "../components/ProductGrid";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch ("https://pixelforge21.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Carousel
        images={["/assets/banner1.jpg", "/assets/banner2.jpg"]}
      />
      <SearchBar onSearch={setSearchTerm} />
      <CategoryBar onSelectCategory={() => {}} />
      {loading ? <Loader /> : <ProductGrid products={filteredProducts} />}
    </div>
  );
};

export default Home;

