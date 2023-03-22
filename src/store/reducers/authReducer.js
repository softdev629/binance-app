// import action types
import { LOGIN_SUCCESS, LOGOUT, SET_APIINFO } from "../actions/types";

// auth store initial state
const initialState = {
  authenticated: false, // is authenticated
  user: null, // user info,
  apikey: null,
  secret: null,
  type: 0
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: // if login success
      return {
        authenticated: false,
        user: action.payload,
      };
    case LOGOUT: // logout action
      return {
        authenticated: false,
        user: null,
      };
    case SET_APIINFO:
      return {
        ...state,
        apikey: action.payload.apikey,
        secret: action.payload.secret,
      };
    default:
      return state;
  }
};
