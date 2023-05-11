import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems ?
          cartItems.map(item => (
              <li key={item.name}>
                <CartItem id={item.id} quantity={item.quantity} total={item.total} price={item.price} name={item.name} />
              </li>
            )
          )
          : "You have product in your cart"
        }
      </ul>
    </div>
  );
};

export default CartItems;
