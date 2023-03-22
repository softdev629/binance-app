// import action types
import {
  SET_BUYCONDITION_PRICE,
  SET_BUYCONDITOIN_GOES,
  SET_INDICATOR_LENGTH,
  SET_INDICATOR_PARAMS,
  SET_PAIR,
  SET_QUANTITY_PERCENTAGE,
  SET_QUANTITY_TYPE,
  SET_SELLPRICE,
  SET_TIMEFRAME,
} from "../actions/types";

// settings store initial state
const initialState = {
  pair: "BTCUSDT", // currency-pair [BTCUSDT]
  timeframe: "1m", // timeframe  [1m, 5m, 10m, 15m, 30m, 1h]
  indicatorLength: null, // indicator-length
  indicatorParams: "open", // indicator-params [Open, Low, High, Close]
  buyconditionGoes: "above", // buycondition-goes [above, below]
  buyconditionPrice: "open", // buyconditoin-price [Open, Low, High, Close]
  sellPrice: null, // sell-price
  quantityType: "amount", // quantity-type [amount, volume]
  quantityPercentage: null, // quantity-percentage
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAIR:
      return {
        ...state,
        pair: action.payload,
      };
    case SET_TIMEFRAME:
      return {
        ...state,
        timeframe: action.payload,
      };
    case SET_INDICATOR_LENGTH:
      return {
        ...state,
        indicatorLength: action.payload,
      };
    case SET_INDICATOR_PARAMS:
      return {
        ...state,
        indicatorParams: action.payload,
      };
    case SET_BUYCONDITOIN_GOES:
      return {
        ...state,
        buyconditionGoes: action.payload,
      };
    case SET_BUYCONDITION_PRICE:
      return {
        ...state,
        buyconditionPrice: action.payload,
      };
    case SET_SELLPRICE:
      return {
        ...state,
        sellPrice: action.payload,
      };
    case SET_QUANTITY_TYPE:
      return {
        ...state,
        quantityType: action.payload,
      };
    case SET_QUANTITY_PERCENTAGE:
      return {
        ...state,
        quantityPercentage: action.payload,
      };
    default:
      return state;
  }
};
