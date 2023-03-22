import { IS_DATA_LOADING, DATA_LOADED, ORDER_SELECTED } from "../actions/types";

const initialState = {
  isLoading: false,
  data: [],
  order: {},
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case IS_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_LOADED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ORDER_SELECTED:
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
};
