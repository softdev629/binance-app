// import basics
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// import action
import { loginAction } from "../../store/actions/authAction";

// Login Page
const Login = () => {
  // dispatch for redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // define states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form submit handle function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction({ email, password }, navigate));

    // clear inputs
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h1>Please sign in by entering details below</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          className="select-box"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="select-box"
          required
          value={password}
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="next-btn">Login</button>
        <div className="auth-etc">
          <NavLink to="/forgot-password">Forgot Password?</NavLink>
          <NavLink to="/register" style={{ marginLeft: 50 }}>
            New user?
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
