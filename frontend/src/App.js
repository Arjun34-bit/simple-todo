import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(false);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="App">
      <div className="box">
        <div>
          <h1 className="heading">My Todos</h1>
        </div>
        {user ? (
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
