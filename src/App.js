// import basics
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css"; // import css
import store from "./store"; // import store

// import componets
import Logo from "./components/Logo";
import Login from "./components/auth/Login";
import Navbar from "./components/Navbar";
import Settings from "./components/settings/Settings";
import Ticker from "./components/settings/Ticker";
import TimeFrame from "./components/settings/Timeframe";
import Indicator from "./components/settings/Indicator";
import BuyCondition from "./components/settings/BuyCondition";
import SellCondition from "./components/settings/SellCondition";
import Quantity from "./components/settings/Quantity";
import Trade from "./components/settings/Trade";
import Log from "./components/log";
import Active from "./components/active";
import SignUp from "./components/auth/SignUp";
import PhoneVerify from "./components/auth/PhoneVerify";
import ApiInfo from "./components/auth/ApiInfo";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Logo />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/phone/verify" element={<PhoneVerify />} />
            <Route path="/apiinfo" element={<ApiInfo />} />
            <Route path="/binance" element={<Navbar />}>
              <Route path="" element={<Navigate to="settings" />} />
              <Route path="settings" element={<Settings />}>
                <Route path="" element={<Navigate to="ticker" />} />
                <Route path="ticker" element={<Ticker />} />
                <Route path="timeframe" element={<TimeFrame />} />
                <Route path="indicator" element={<Indicator />} />
                <Route path="buycondition" element={<BuyCondition />} />
                <Route path="sellcondition" element={<SellCondition />} />
                <Route path="quantity" element={<Quantity />} />
                <Route path="trade" element={<Trade />} />
              </Route>
              <Route path="log" element={<Log />} />
              <Route path="active" element={<Active />} />
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
