import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { verifyAction } from "../../store/actions/authAction";

// PhoneVerify Page
const PhoneVerify = () => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  // define states
  const [code, setCode] = useState("");

  // form submit handle function
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(verifyAction({ code }));
    // clear input
    setCode("");
  };

  return (
    <div className="verify">
      <h2 style={{ marginBottom: "30px" }}>Verify your Phone number</h2>
      <form className="verify-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="select-box"
          value={code}
          placeholder="Enter Code"
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="code-btn">Authenticate</button>
      </form>
    </div>
  );
};

export default PhoneVerify;
