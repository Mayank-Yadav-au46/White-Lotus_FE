import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <h3>
        {props.title} <label className="count">{props.count}</label>
      </h3>
      <div className="cart-btn-cont">
        <button
          className="cart-btn-plus"
          onClick={() => {
            dispatch(addToCart(props.title));
          }}
        >
          +
        </button>
        <button
          className="cart-btn-minus"
          onClick={() => {
            dispatch(removeFromCart(props.title));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
