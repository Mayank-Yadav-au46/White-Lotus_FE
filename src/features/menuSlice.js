import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      starters: [
        "Paneer Chilly",
        "Chicken Chilly",
        "Gobhi Manchurian",
        "Chicken Tikka",
        "Paneer Tikka",
        "French Fries",
        "Mushroom Chilly",
        "Crispy Corn",
        "Hakka Noodles",
        "Chilly Garlic Noodles",
        "Sechzwan Noodles",
        "Tandoori Maggie",
        "Garlic Bread",
        "Corn Chilly",
      ],
      mainCourse: [
        "Chicken Butter Masala",
        "Chicken Curry",
        "Chicken Punjabi",
        "Chicken Mughlai",
        "Chicken Rara",
        "Chicken Hyderabadi",
        "Paneer Butter Masala",
        "Kadhai Paneer",
        "Matar Paneer",
        "Palak Paneer",
        "Paneer Kolhapuri",
        "Mixed Veg",
        "Dum Aloo",
        "Paneer Bhuna",
      ],
      breads: [
        "Plain Naan",
        "Butter Naan",
        "Tandoori Roti",
        "Butter Tandoori Roti",
        "Plain Roti",
        "Butter Roti",
        "Aloo Paratha",
        "Gobhi Paratha",
        "Paneer Paratha",
      ],
      deserts: [
        "Ras Malai",
        "Ice Cream",
        "Falooda",
        "Mawa Baati",
        "Gajar Halwa",
        "Moongdaal Halwa",
      ],
    },
  ],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    generateBill: (state, action) => {},
  },
});

//exporting action creator
export const {} = menuSlice.actions;

//exporting reducer
export default menuSlice.reducer;
