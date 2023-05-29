import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    "Aloo Gobhi": 1,
    "Kanda Vada": 2,
    "Crispy Corn": 3,
    "Corn Chilly": 4,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let name = action.payload;
      if (state.value[name]) {
        state.value[name]++;
      } else {
        state.value[name] = 1;
      }
    },
    removeFromCart: (state, action) => {
      let name = action.payload;
      if (state.value[name]) {
        if (state.value[name] === 1) {
          delete state.value[name];
        } else if (state.value[name] > 1) {
          state.value[name]--;
        }
      }
    },
  },
});

//exporting action creator
export const { addToCart, removeFromCart } = cartSlice.actions;

//exporting reducer
export default cartSlice.reducer;
