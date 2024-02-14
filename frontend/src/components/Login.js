import React from "react";
import { useState } from "react";
import { login, setIsLoggedIn } from "../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, isLoggedIn } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
    dispatch(setIsLoggedIn(true));
    console.log(user);
  };

  return (
    <div>
      <h2 className="login-signup-heading">Login</h2>
      <form>
        <input
          className="input-field"
          type="text"
          name="username"
          placeholder="UserName :"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Password :"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="login-signup-btn"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
