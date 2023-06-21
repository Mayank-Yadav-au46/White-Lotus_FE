import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUp: async (state, action) => {
      console.log(action.payload);
      const { name, email, password } = action.payload;
      console.log(name, email, password);

      const response = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers: {
          "content-type": "application/JSON",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const res = await response.json();
      console.log(res);
    },
  },
});

//exporting action creator
export const { signUp } = signUpSlice.actions;

//exporting reducer
export default signUpSlice.reducer;
