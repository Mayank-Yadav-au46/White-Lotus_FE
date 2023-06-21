import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../features/signUpSlice";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCpasss] = useState("");

  const dispatch = useDispatch();

  const signUp_func = (e) => {
    e.preventDefault();

    if (password === cPass) {
      const data = { name, email, password };
      dispatch(signUp(data));
      setName("");
      setEmail("");
      setPassword("");
      setCpasss("");
    } else {
      alert("Password not matching! Try again.");
    }
  };

  return (
    <div className="su-cont">
      <h2 style={{ textAlign: "center" }}>SignUp</h2>
      <form onSubmit={signUp_func}>
        <p>Name:</p>
        <input
          type="text"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <p>Email:</p>
        <input
          type="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p>Password:</p>
        <input
          type="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p>Confirm Password:</p>
        <input
          type="password"
          required={true}
          value={cPass}
          onChange={(e) => setCpasss(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit !</button>
      </form>
    </div>
  );
};

export default SignUp;
