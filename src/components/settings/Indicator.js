//import basics
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// import redux actions
import {
  setIndicatorLength,
  setIndicatorParams,
} from "../../store/actions/settingsAction";

// Indicator Setting Component
const Indicator = () => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  // define controllable ref
  const indicatorLengthRef = useRef(null);

  return (
    <div className="choose-indicator">
      <h1>Choose an Indicator & Length</h1>
      <label>Indicator </label>
      <select className="select-box">
        <option>SMA</option>
      </select>
      <input
        type="text"
        className="select-box"
        placeholder="Enter indicator Length"
        ref={indicatorLengthRef}
        onChange={(e) => {
          dispatch(setIndicatorLength(e.target.value));
        }}
      />
      <label>Parameters </label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setIndicatorParams(e.target.value))}
      >
        <option value="open">Open</option>
        <option value="low">Low</option>
        <option value="high">High</option>
        <option value="close">Close</option>
      </select>
      <button
        className="next-btn"
        onClick={() => {
          // validation
          if (indicatorLengthRef.current.value === "")
            indicatorLengthRef.current.classList.add("invalid");
          else {
            indicatorLengthRef.current.classList.remove("invalid");
            navigate("/binance/settings/buycondition"); // move to next setting
          }
        }}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default Indicator;
