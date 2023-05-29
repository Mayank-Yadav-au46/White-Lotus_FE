import React from "react";
import { useState } from "react";
import ReservationsCard from "./ReservationCards";
import { useSelector, useDispatch } from "react-redux";

import { addReservation } from "../features/reservationSlice";
import CustomerCard from "./CustomerCard";

const ReservationPage = () => {
  //to call the state, we use useDispatch
  const dispatch = useDispatch();

  const [resInpName, setInpName] = useState("");

  // This function is adding the resInpName value to reservation slice
  // by calling the addReservation function
  const addResHandle = () => {
    if (!resInpName) {
      return;
    }
    dispatch(addReservation(resInpName));
    setInpName(" ");
  };

  //to use the state and have access to it, we use useSelector
  //state.reservations we have created in store.js
  const reservations = useSelector((state) => state.reservations.value);
  const customers = useSelector((state) => state.customer.value);
  return (
    <div className="App">
      <header className="App-header">Sample Restaurant</header>
      <div className="cont">
        <div className="reservation-cont">
          <div className="res-input">
            <fieldset>
              <legend>Add Costumer </legend>
              <label>Enter Name</label>
              <input
                onChange={(e) => setInpName(e.target.value)}
                value={resInpName}
              ></input>
              <br />
              <br />
              <button onClick={addResHandle}>Add</button>
            </fieldset>
          </div>
          {reservations.map((e, i) => (
            <ReservationsCard name={e} index={i} />
          ))}
        </div>
        <div className="reserved-cont">
          {customers.map((e, i) => (
            <CustomerCard name={e.name} food={e.food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
