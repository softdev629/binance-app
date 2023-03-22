import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setApiAction } from "../../store/actions/authAction";

const ApiInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [apikey, setApikey] = useState("");
  const [secret, setSecret] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setApikey("");
    setSecret("");
  };

  return (
    <div className="apiinfo-container">
      <h1>Binance API Info</h1>
      <form className="apiinfo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter API Key"
          className="select-box"
          value={apikey}
          required
          onChange={(e) => setApikey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter API Secret"
          className="select-box"
          value={secret}
          required
          onChange={(e) => setSecret(e.target.value)}
        />
        <input
          type="radio"
          className="select-box"
          name="type"
          value={0}
          checked
          onChange={(e) => setType(e.target.value)}
        />Real Client
        <input
          type="radio"
          className="select-box"
          name="type"
          value={1}
          onChange={(e) => setType(e.target.value)}
        />Mock Client
        <button
          className="next-btn"
          onClick={() => {
            dispatch(setApiAction({ apikey, secret, type }, navigate));
          }}
        >
          Next &gt;&gt;
        </button>
      </form>
    </div>
  );
};

export default ApiInfo;
