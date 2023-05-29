import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ReservationPage from "./components/ReservationPage";
import RestaurantPage from "./components/RestaurantPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route
          path="/restaurantPage"
          element={<RestaurantPage />}
          exact
        ></Route>
        <Route
          path="/reservationPage"
          element={<ReservationPage />}
          exact
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
