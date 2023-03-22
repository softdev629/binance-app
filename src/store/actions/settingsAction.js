// import action types
import {
  SET_BUYCONDITOIN_GOES,
  SET_BUYCONDITION_PRICE,
  SET_INDICATOR_LENGTH,
  SET_INDICATOR_PARAMS,
  SET_PAIR,
  SET_TIMEFRAME,
  SET_SELLPRICE,
  SET_QUANTITY_TYPE,
  SET_QUANTITY_PERCENTAGE,
} from "./types";

// set pair in settings
export const setPair = (pair) => (dispatch) => {
  dispatch({ type: SET_PAIR, payload: pair });
};

// set timeframe in settings
export const setTimeframe = (timeframe) => (dispatch) => {
  dispatch({ type: SET_TIMEFRAME, payload: timeframe });
};

// set indicator-length in settings
export const setIndicatorLength = (indicatorLength) => (dispatch) => {
  dispatch({ type: SET_INDICATOR_LENGTH, payload: indicatorLength });
};

// set indicator-params in settings
export const setIndicatorParams = (indicatorParams) => (dispatch) => {
  dispatch({ type: SET_INDICATOR_PARAMS, payload: indicatorParams });
};

// set buycondition-goes in settings
export const setBuyconditionGoes = (buyconditionGoes) => (dispatch) => {
  dispatch({ type: SET_BUYCONDITOIN_GOES, payload: buyconditionGoes });
};

// set buycondition-price in settings
export const setBuyconditionPrice = (buyconditionPrice) => (dispatch) => {
  dispatch({ type: SET_BUYCONDITION_PRICE, payload: buyconditionPrice });
};

// set sell-price in settings
export const setSellPrice = (sellPrice) => (dispatch) => {
  dispatch({ type: SET_SELLPRICE, payload: sellPrice });
};

// set quantity-type in settings
export const setQuantityType = (quantityType) => (dispatch) => {
  dispatch({ type: SET_QUANTITY_TYPE, payload: quantityType });
};

// set quantity-percentage in settings
export const setQuantityPercentage = (quantityPercentage) => (dispatch) => {
  dispatch({ type: SET_QUANTITY_PERCENTAGE, payload: quantityPercentage });
};
