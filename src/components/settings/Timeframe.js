// import basics
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// import redux action
import { setTimeframe } from "../../store/actions/settingsAction";

// declare timeframes' list
const timeframeList = ["1m", "5m", "10m", "15m", "30m", "1h"];

// Timeframe Setting Component
const Timeframe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="choose-timeframe">
      <h1>Choose a timeframe</h1>
      <label>Timeframe </label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setTimeframe(e.target.value))}
      >
        {timeframeList.map((timeframe) => (
          <option value={timeframe} key={timeframe}>
            {timeframe}
          </option>
        ))}
      </select>
      <button
        className="next-btn"
        onClick={() => navigate("/binance/settings/indicator")}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default Timeframe;
