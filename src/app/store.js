import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";
import menuReducer from "../features/menuSlice";
import cartReducer from "../features/cartSlice";
import signUpReducer from "../features/signUpSlice";
import loginReducer from "../features/loginSlice";


export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    customer: customerReducer,
    menu: menuReducer,
    cart: cartReducer,
    signUp: signUpReducer,
    login: loginReducer,

  },
});
