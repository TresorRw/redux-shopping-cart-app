import React from "react";
import { useDispatch } from "react-redux";
import "./Auth.css";
import authActions from "../store/AuthSlice";

const Auth = () => {
  const dispatch = useDispatch()
  const logUserIn = (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const password = e.target[1].value;
    if(id === "Tresor" && password === "123456") {
      dispatch(authActions.actions.login())
    } else {
      alert("Login Failed")
    }
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={logUserIn}>
        <input type="text" name="id" id="id" placeholder="ID" />
        <input type="password" name="password" id="password" placeholder="Password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
