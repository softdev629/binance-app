import { SET_APIINFO } from "./types";

// Login Action
export const loginAction = (userData, navigate) => (dispatch) => {
  navigate("/apiinfo");
  return;
  fetch("http://localhost:4000/api/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error_message) {
        alert(data.error_message);
      } else {
        //👇🏻 Logs the username to the console
        console.log(data.data);
        //👇🏻 save the username to the local storage
        localStorage.setItem("username", data.data.username);
        //👇🏻 Navigates to the 2FA route
        navigate("/apiinfo");
      }
    })
    .catch((err) => console.error(err));
};

// Signup Action
export const registerAction = (userData, navigate) => (dispatch) => {
  fetch("http://localhost:4000/api/register", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // if error
      if (data.error_message) {
        alert(data.error_message);
      } else {
        // success
        alert(data.message);
        navigate("/login"); // move to login page
      }
    })
    .catch((err) => console.error(err));
};

export const verifyAction = (code, navigate) => (dispatch) => {
  fetch("http://localhost:4000/api/verification", {
    method: "POST",
    body: JSON.stringify(code),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error_message) {
        alert(data.error_message);
      } else {
        //👇🏻 Navigates to the dashboard page
        navigate("/dashboard");
      }
    })
    .catch((err) => console.error(err));
};

export const setApiAction = (apiinfo, navigate) => (dispatch) => {
  localStorage.setItem("APIKEY", apiinfo.apikey);
  localStorage.setItem("APISECRET", apiinfo.secret);
  localStorage.setItem("APITYPE", apiinfo.type);
  dispatch({ type: SET_APIINFO, payload: apiinfo });
  navigate("/binance");
};
