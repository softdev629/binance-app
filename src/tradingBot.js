import Binance from "binance-api-node";
import Binance1 from "./node-binance-api";

// import redux actions
import { orderSelected } from "./store/actions/dataAction";

const SMA = require("technicalindicators").SMA;

const start_bot = async (data, settings, dispatch) => {
  if (localStorage.getItem("APITYPE") === 0) {
    const client = Binance({
      apiKey: localStorage.getItem("APIKEY"),
      apiSecret: localStorage.getItem("APISECRET"),
    });
    if (!client) {
      alert("There is no APIKEY and APISECRET in localStorage");
      return;
    }

    let order = await client.openOrders({
      symbol: settings.pair,
      recvWindow: "60000",
    });
    if (order.length > 0) {
      console.log("already exists");
      return {
        status: 0,
        message: "There is already trading with this pair",
      };
    }
    const real_data = [];
    for (let item of data) {
      let tmp = {
        time: item[0],
        open: parseFloat(item[1]),
        high: parseFloat(item[2]),
        low: parseFloat(item[3]),
        close: parseFloat(item[4]),
      };
      real_data.push(tmp);
    }
    let tmp = real_data.map((item) => item.open);
    let data2 = SMA.calculate({
      period: settings.indicatorLength,
      values: tmp,
    });
    let sma_data = [];
    for (let i = settings.indicatorLength - 1; i < real_data.length; i++) {
      tmp = {
        time: real_data[i].time,
        value: data2[i - settings.indicatorLength + 1],
      };
      sma_data.push(tmp);
    }

    if (settings.buyconditionGoes === "above") {
      let currentPrice;
      let smaPrice = sma_data[sma_data.length - 1].value;
      if (settings.buyconditionPrice === "open")
        currentPrice = real_data[real_data.length - 1].open;
      if (settings.buyconditionPrice === "high")
        currentPrice = real_data[real_data.length - 1].high;
      if (settings.buyconditionPrice === "low")
        currentPrice = real_data[real_data.length - 1].low;
      if (settings.buyconditionPrice === "close")
        currentPrice = real_data[real_data.length - 1].close;
      console.log("above current:" + currentPrice + "sma:" + smaPrice);
      if (currentPrice > smaPrice) {
        let params = {
          symbol: settings.pair,
          side: "BUY",
          quantity: 0.1,
          recvWindow: 6000,
          price: currentPrice,
          stopPrice: currentPrice - settings.sellPrice * 1,
        };
        const payload = {
          type: "buy",
          time: real_data[real_data.length - 1].time,
          price: currentPrice,
        };
        console.log(payload);
        dispatch(orderSelected(payload));
        await client.order(params);
      }
    } else {
      let currentPrice;
      let smaPrice = sma_data[sma_data.length - 1].value;
      if (settings.buyconditionPrice === "open")
        currentPrice = real_data[real_data.length - 1].open;
      if (settings.buyconditionPrice === "high")
        currentPrice = real_data[real_data.length - 1].high;
      if (settings.buyconditionPrice === "low")
        currentPrice = real_data[real_data.length - 1].low;
      if (settings.buyconditionPrice === "close")
        currentPrice = real_data[real_data.length - 1].close;
      console.log("below current:" + currentPrice + "sma:" + smaPrice);
      if (currentPrice < smaPrice) {
        let params = {
          symbol: settings.pair,
          side: "SELL",
          quantity: 0.1,
          recvWindow: 6000,
          price: currentPrice,
          stopPrice: currentPrice - settings.sellPrice * 1,
        };
        const payload = {
          type: "sell",
          time: real_data[real_data.length - 1].time,
          price: currentPrice,
        };
        console.log(payload);
        dispatch(orderSelected(payload));
        await client.order(params);
      }
    }
  } else {
    // return;
    const client = new Binance1().options({
      APIKEY: localStorage.getItem("APIKEY"),
      APISECRET: localStorage.getItem("APISECRET"),
      test: true,
    });
    alert(11);
    if (!client) {
      alert("There is no APIKEY and APISECRET in localStorage");
      return;
    }
    return;

    let order = await client.openOrders({
      symbol: settings.pair,
      recvWindow: "60000",
    });
    if (order.length > 0) {
      console.log("already exists");
      return {
        status: 0,
        message: "There is already trading with this pair",
      };
    }


  }
};

export default start_bot;
