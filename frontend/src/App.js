import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  setIsLoggedIn,
  setTodoNull,
  setUserNull,
} from "./redux/actions/todoActions";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogout = () => {
    dispatch(setUserNull());
    dispatch(setIsLoggedIn(false));
    // dispatch(setTodoNull());
  };

  return (
    <div className="App">
      <div className="box">
        <div className="bar">
          <span>Arjun</span>
          <h1 className="heading">My Todos</h1>
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            ""
          )}
        </div>
        {isLoggedIn ? (
          <Todos />
        ) : (
          <div className="login-signup-box">
            {isLogin ? <Login /> : <Signup />}
            <button className="btn" onClick={switchForm}>
              {isLogin ? "Don't Have Account" : "Login to Your Account"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
