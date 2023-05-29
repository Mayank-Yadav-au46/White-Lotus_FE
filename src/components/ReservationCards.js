import React from "react";
import "./ReservationCard.css";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";

const ReservationsCard = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="reservation-card">
        {props.name}
        <button
          className="res-button"
          onClick={() => {
            dispatch(removeReservation(props.index));
            dispatch(addCustomer({ name: props.name, food: [] }));
          }}
        >
          X
        </button>
      </div>
    </>
  );
};

export default ReservationsCard;
