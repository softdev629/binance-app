import React from "react";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createChart, ColorType } from "lightweight-charts";

const SMA = require("technicalindicators").SMA;

const Display = ({ data: { data, order }, settings }) => {
  const tmp_data = [];
  for (let item of data) {
    let tmp = {
      time: item[0],
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
    };
    tmp_data.push(tmp);
  }
  let tmp = tmp_data.map((item) => item.open);
  let data2 = SMA.calculate({ period: settings.indicatorLength, values: tmp });
  let data1 = [];
  for (let i = settings.indicatorLength - 1; i < tmp_data.length; i++) {
    tmp = {
      time: tmp_data[i].time,
      value: data2[i - settings.indicatorLength + 1],
    };
    data1.push(tmp);
  }

  const chartContainerRef = useRef();
  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
        textColor: "black",
      },
      width: 800,
      height: 400,
    });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(tmp_data);

    if (order.time !== undefined) {
      candlestickSeries.setMarkers([
        {
          time: order.time,
          position: "aboveBar",
          color: "red",
          shape: "arrowDown",
        },
      ]);
    }

    const areaSeries = chart.addLineSeries();
    areaSeries.setData(data1);
    chart.timeScale().fitContent();
    return () => {
      chart.remove();
    };
  }, [data]);
  return (
    <div className="d-flex justify-content-center" ref={chartContainerRef} />
  );
};

Display.propTypes = {
  data: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  settings: state.settings,
});

export default connect(mapStateToProps, {})(Display);
