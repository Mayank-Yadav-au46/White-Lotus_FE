import React from "react";

const Login = () => {
  return (
    <div className="su-cont" style={{ height: "18rem" }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form>
        <p>Email:</p>
        <input></input>
        <p>Password:</p>
        <input></input>
        <br></br>
        <button>Login !</button>
      </form>
    </div>
  );
};

export default Login;
