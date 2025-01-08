import React from "react";
import ProductCard from "../components/ProductCard";
// import { products } from "../data/products"; will add products after transfering to data folder

const Graphics = ({ addToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Graphics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.graphics.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Graphics;
