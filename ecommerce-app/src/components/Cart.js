import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const getTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>
        </>
      )}
    </div>
  );
};


export default Cart;

};

export default Cart;
