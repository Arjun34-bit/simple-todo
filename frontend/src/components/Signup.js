import React, { useState } from "react";
import { register, setIsLoggedIn } from "../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(setIsLoggedIn(true));
    dispatch(register(username, password));
  };

  return (
    <div>
      <h2 className="login-signup-heading">Register</h2>
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
          onClick={handleSignup}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
