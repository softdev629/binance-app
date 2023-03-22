// import basics
import React, { useEffect } from "react";
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
  setBuyconditionGoes,
  setBuyconditionPrice,
} from "../../store/actions/settingsAction";

// BuyCondition Setting Component
const BuyCondition = ({
  settings: { pair, timeframe },
  data: { isLoading, data },
}) => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  useEffect(() => {
    const params = {
      pair: pair,
      timeframe: timeframe,
    };
    setInterval(() => {
      dispatch(loadData(params));
    }, 5000);
  }, []);

  return (
    <div className="choose-trade">
      <div>
        <h1>Choose buy conditions</h1>
        <label>Price goes</label>
        <select
          className="select-box"
          onChange={(e) => dispatch(setBuyconditionGoes(e.target.value))}
        >
          <option value="above">Above SMA</option>
          <option value="below">Below SMA</option>
        </select>
        <label>Buy @ Price </label>
        <select
          className="select-box"
          onChange={(e) => dispatch(setBuyconditionPrice(e.target.value))}
        >
          <option value="open">Open</option>
          <option value="high">High</option>
          <option value="low">Low</option>
          <option value="close">Close</option>
        </select>

        <button
          className="next-btn"
          onClick={() => navigate("/binance/settings/sellcondition")}
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
BuyCondition.propTypes = {
  loadData: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

// matches state props
const mapStateToProps = (state) => ({
  settings: state.settings,
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(BuyCondition);
