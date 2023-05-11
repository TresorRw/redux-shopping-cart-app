import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../store/CartSlice";
const Cart = () => {
  const quantity = useSelector(state => state.cart.cartQuantity)
  const dispatch = useDispatch();
  const toggleCartView = () => {
    dispatch(CartAction.setShowCart())
  }
  return (
    <div className="cartIcon" onClick={toggleCartView}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
