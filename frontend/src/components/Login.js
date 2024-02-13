import React from "react";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2 className="login-signup-heading">Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
