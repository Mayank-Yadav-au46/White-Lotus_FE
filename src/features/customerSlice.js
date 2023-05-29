import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      name: "Prakash",
      food: [
        "Idli",
        "Dosa",
        "Paratha",
        "Chai",
        "Chutney",
        "Papad",
        "Lassi",
        "Dahi Vada",
        "Biriyani",
        "COld Coffee",
      ],
    },
    { name: "Yash", food: ["Chicken Soup", "Chilli Chicken", "Biriyani"] },
  ],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action) => {
      state.value.forEach((cust) => {
        if (cust.name === action.payload.name) {
          cust.food.push(action.payload.food);
        }
      });
    },
  },
});

//exporting action creator
export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

//exporting reducer
export default customerSlice.reducer;
