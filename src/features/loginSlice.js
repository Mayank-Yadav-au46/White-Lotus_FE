import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: async (state, action) => {
      console.log(action.payload);
      const { email, password } = action.payload;

      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/JSON",
        },
        body: JSON.stringify({ email, password }),
      });

      const res = await response.json();
      console.log(res);
    },
  },
});

//export action creator
export const { login } = loginSlice.actions;

//export reducer
export default loginSlice.reducer;
