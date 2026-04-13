import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))
      )}

      <Link to="/checkout">
        <button>Go to Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;