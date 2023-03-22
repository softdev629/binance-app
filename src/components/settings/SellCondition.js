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
import { setSellPrice } from "../../store/actions/settingsAction";

// SellCondition Setting Component
const SellCondition = ({
  settings: { pair, timeframe },
  data: { isLoading, data },
}) => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  // define controllable ref
  const sellPriceRef = useRef(null);

  return (
    <div className="choose-trade">
      <div>
        <h1>Choose sell conditions</h1>
        <label>Sell if, Price goes</label>
        <input
          type="text"
          className="select-box"
          placeholder="Below Last Candle Low"
          ref={sellPriceRef}
          onChange={(e) => dispatch(setSellPrice(e.target.value))}
        />
        <button
          className="next-btn"
          onClick={() => {
            // validation
            if (sellPriceRef.current.value === "")
              sellPriceRef.current.classList.add("invalid");
            else {
              sellPriceRef.current.classList.remove("invalid");
              navigate("/binance/settings/quantity");
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
SellCondition.propTypes = {
  loadData: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

// matches state props
const mapStateToProps = (state) => ({
  settings: state.settings,
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(SellCondition);
