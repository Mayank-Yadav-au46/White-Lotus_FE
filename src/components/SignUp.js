import React from "react";

const SignUp = () => {
  return (
    <div className="su-cont">
      <h2 style={{ textAlign: "center" }}>SignUp</h2>
      <form>
        <p>Name:</p>
        <input></input>
        <p>Email:</p>
        <input></input>
        <p>Password:</p>
        <input></input>
        <p>Confirm Password:</p>
        <input></input>
        <br></br>
        <button>Submit !</button>
      </form>
    </div>
  );
};

export default SignUp;
