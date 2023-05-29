import React, { useState } from "react";
import { addFoodToCustomer } from "../features/customerSlice";
import { useDispatch } from "react-redux";

const CustomerCard = (props) => {
  const [custFoodInp, setCustFoodInp] = useState(" ");
  const dispatch = useDispatch();
  return (
    <div className="customer-card">
      <p className="cust-name">{props.name}</p>
      <div className="cust-food-cont">
        {props.food.map((e) => (
          <p className="cust-food">{e}</p>
        ))}
      </div>
      <div className="cust-food-inp-cont">
        <input
          value={custFoodInp}
          onChange={(e) => {
            setCustFoodInp(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (!custFoodInp) {
              return;
            }
            dispatch(
              addFoodToCustomer({ name: props.name, food: custFoodInp })
            );
            setCustFoodInp("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;
