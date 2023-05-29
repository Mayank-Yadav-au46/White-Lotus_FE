import H_opt from "./H_opt";
import { useState, React } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import User from "./User";

const Home = () => {
  const [userToggle, setUserToggle] = useState(false);

  const [isAdmin, setAdmin] = useState(false);

  return (
    <div className="home">
      <div className="home-head-cont">
        <h1>Welcome to White Lotus !</h1>
      </div>

      {userToggle && (
        <button
          className="user-back"
          onClick={() => {
            setUserToggle(false);
          }}
        >
          🡠
        </button>
      )}
      {isAdmin && (
        <button
          className="user-back"
          style={{ "margin-right": "30rem" }}
          onClick={() => {
            setAdmin(false);
          }}
        >
          {" "}
          🡠
        </button>
      )}
      <div className="h-o-cont">
        {!userToggle && !isAdmin && <p>You're a ...</p>}
        {!userToggle && !isAdmin && (
          <H_opt
            title="Admin"
            onClick={() => {
              setAdmin(true);
            }}
          />
        )}
        {!userToggle && !isAdmin && (
          <H_opt
            title="User"
            onClick={() => {
              setUserToggle(true);
            }}
          />
        )}
        {isAdmin && <Login />}
        {userToggle && <User />}
      </div>
    </div>
  );
};

export default Home;
