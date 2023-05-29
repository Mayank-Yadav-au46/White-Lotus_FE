import { React } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";

const User = () => {
  const [isLogin, onLogin] = useState(false);
  return (
    <div className="user-page">
      <div className="login-toggle">
        <button
          onClick={() => {
            onLogin(false);
          }}
        >
          SignUp
        </button>
        <button
          onClick={() => {
            onLogin(true);
          }}
        >
          Login
        </button>
      </div>
      {!isLogin && <SignUp />}
      {isLogin && <Login />}
    </div>
  );
};

export default User;
