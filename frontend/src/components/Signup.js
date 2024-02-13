// Signup.js
import React from "react";

const Signup = () => {
  return (
    <div>
      <h2 className="login-signup-heading">Register</h2>
      <form>
        <input
          className="input-field"
          type="text"
          name="username"
          placeholder="UserName :"
        />
        <br />
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password :"
        />
        <br />
        <button className="login-signup-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
