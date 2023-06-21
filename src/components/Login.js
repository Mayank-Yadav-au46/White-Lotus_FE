
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login_handle = (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(login(data));
  };

  return (
    <div className="su-cont" style={{ height: "18rem" }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={login_handle}>
        <p>Email:</p>
        <input
          type="email"
          required="true"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>Password:</p>
        <input
          type="password"
          required="true"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Login !</button>
      </form>
    </div>
  );
};

export default Login;
