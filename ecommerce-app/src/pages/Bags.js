import React, { useState } from "react";
// import { products } from "../data/products"; will add the products data to a seperate data folder
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const Bags = ({ addToCart }) => {
  const [sortedProducts, setSortedProducts] = useState(products.bags);

  const sortByPrice = (order) => {
    const sorted = [...products.bags].sort((a, b) => {
      if (order === "low-high") return a.price - b.price;
      if (order === "high-low") return b.price - a.price;
      return 0;
    });
    setSortedProducts(sorted);
  };

  return (
    <div>
      <h1>Bags</h1>
      <Filter sortByPrice={sortByPrice} />
      // <div className="products-grid">
      //   {sortedProducts.map((product) => (
      //     <ProductCard key={product.id} product={product} addToCart={addToCart} />
      //   ))} todo: uncomment when shifteed to data directory
      </div>
    </div>
  );
};

export default Bags;
