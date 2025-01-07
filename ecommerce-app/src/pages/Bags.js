import React from "react";
import ProductCard from "../components/ProductCard";

const Bags = ({ addToCart }) => {
  return (
    <div>
      <h1>Bags</h1>
      <div className="products-grid">
        // {products.bags.map((product) => (
        //   // <ProductCard key={product.id} product={product} addToCart={addToCart} />
        // ))}
      </div>
    </div>
  );
};

export default Bags;
