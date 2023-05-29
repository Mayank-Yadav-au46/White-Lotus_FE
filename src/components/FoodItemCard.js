import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

const FoodItemCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="food-item-cont">
      <img src="../../public/food_img.jpg"></img>
      <p>
        <b>{props.title}</b>
      </p>
      <div className="fi-btn-cont">
        <button
          className="plus"
          onClick={() => {
            dispatch(addToCart(props.title));
          }}
        >
          +
        </button>
        <button
          className="minus"
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

export default FoodItemCard;
