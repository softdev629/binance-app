// import basics
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import action
import { registerAction } from "../../store/actions/authAction";

// Signup Page
const SignUp = () => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  // define states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction({ email, username, tel, password }, navigate));

    // clear inputs
    setEmail("");
    setPassword("");
    setTel("");
    setUsername("");
  };

  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          className="select-box"
          placeholder="Enter Email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="select-box"
          placeholder="Enter Username"
          type="text"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="select-box"
          placeholder="Enter Telephone"
          type="tel"
          value={tel}
          required
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          className="select-box"
          placeholder="Enter Password"
          type="password"
          value={password}
          required
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="next-btn">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
