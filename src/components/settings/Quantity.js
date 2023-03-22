// import basics
import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import redux action
import { loadData } from "../../store/actions/dataAction";

// import custom components
import Spinner from "../Spinner";
import Display from "../Display";

// import redux actions
import {
  setQuantityType,
  setQuantityPercentage,
} from "../../store/actions/settingsAction";

// Quatity Setting Component
const Quantity = ({
  settings: { pair, timeframe },
  data: { isLoading, data },
}) => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  // define controllable ref
  const percentageRef = useRef(null);

  return (
    <div className="choose-trade">
      <div>
        <h1>Choose quantity</h1>
        <select
          className="select-box"
          onChange={(e) => dispatch(setQuantityType(e.target.value))}
        >
          <option value="amount">Amount</option>
          <option value="volume">Volume</option>
        </select>
        <input
          type="text"
          className="select-box"
          placeholder="Percentage %"
          ref={percentageRef}
          onChange={(e) => dispatch(setQuantityPercentage(e.target.value))}
        />
        <button
          className="next-btn"
          onClick={() => {
            // validation
            if (percentageRef.current.value === "")
              percentageRef.current.classList.add("invalid");
            else {
              percentageRef.current.classList.remove("invalid");
              navigate("/binance/settings/trade"); // move to next setting
            }
          }}
        >
          Next &gt;&gt;
        </button>
      </div>
      <div className="trading-view">
        {!isLoading && data.length === 0 && (
          <div style={{ height: "400px" }}></div>
        )}
        {isLoading && data.length === 0 && <Spinner />}
        {data.length > 0 && <Display />}
      </div>
    </div>
  );
};

// define proptypes
Quantity.propTypes = {
  loadData: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

// matches state props
const mapStateToProps = (state) => ({
  settings: state.settings,
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(Quantity);
