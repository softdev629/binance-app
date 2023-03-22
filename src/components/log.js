import React, { useEffect } from "react";
import Binance from "binance-api-node";

const client = Binance({
  apiKey: localStorage.getItem("APIKEY"),
  apiSecret: localStorage.getItem("APISECRET"),
});

const Log = () => {
  let order = [
    {
      Type: "Real",
      Symbol: "BTCUSDT",
      Side: "Buy",
      price: 22906.2,
      qty: 0.01,
      time: "2023-01-28 09:21:33",
    },
    {
      Type: "Mock",
      Symbol: "ETHUSDT",
      Side: "SELL",
      price: 22906.2,
      qty: 0.1,
      time: "2023-01-29 09:21:33",
    },
  ];
  // useEffect(() => {
  //   async function myfunc() {
  //     order = await client.openOrders({ recvWindow: "60000" });
  //   }
  //   myfunc();
  // }, []);
  let data;
  if (order.length === 0) data = <h1>There are no logs.</h1>;
  else {
    data = (
      <table className="log-table">
        <tr className="log-table-label">
          <td>Type</td>
          <td>Symbol</td>
          <td>Side</td>
          <td>price</td>
          <td>qty</td>
          <td>time</td>
        </tr>
        {order.map((item) => (
          <tr>
            <td>{item.Type}</td>
            <td>{item.Symbol}</td>
            <td>{item.Side}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </table>
    );
  }
  return (
    <div>
      {data}
    </div>
  );
};

export default Log;
