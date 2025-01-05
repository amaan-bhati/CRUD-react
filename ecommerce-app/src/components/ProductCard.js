import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
