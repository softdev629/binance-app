// import combine action
import { combineReducers } from "redux";

// import reducers
import settingsReducer from "./settingsReducer";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";

// combines all reducers as one
const reducers = combineReducers({
  auth: authReducer, // auth store
  settings: settingsReducer, // settings store
  data: dataReducer, // data store
});

export default reducers;
