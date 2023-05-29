import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action) => {
      //action.payload will be the index
      state.value.splice(action.payload, 1);
    },
  },
});

//exporting action creator
export const { addReservation, removeReservation } = reservationSlice.actions;

//exporting reducer
export default reservationSlice.reducer;
