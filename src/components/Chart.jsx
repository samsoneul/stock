import React, { useState } from "react";
import { AreaChartData, Piedata } from "../constants";
import renderAreaChart from "../charts/Areachart";
import Card from "./card";
import {
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import { convertUnixTimeStampToDate } from "../Helpers/Date-Helper";
import ChartFilter from "./ChartFIlter";
import { chartsConfig } from "../config";
import renderRadarChart from "../charts/Radarchart";
import { Radardata } from "../constants";
import RenderPieChart from "../charts/Piechart";

const Chart = () => {
  const [data] = useState(AreaChartData);
  const [filter, setFilter] = useState("1W");
  const [chartType, setChartType] = useState("Pie");
  let xData = "date";
  let yData = ["dataMin", "dataMax"];

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStampToDate(data.t[index]),
      };
    });
  };
  const chartComponents = {
    Area: () => renderAreaChart(data, xData, yData),
    Radar: () => renderRadarChart(Radardata),
    Pie:()=> RenderPieChart(Piedata)
    // Add more chart types here as needed
  };
  return (
    <Card>
      <ul className="flex absolute top-1 right-2 z-40 ">
        {Object.keys(chartsConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => setFilter(item)}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer
        className="mt-4
      "
      >
        {chartComponents[chartType] ? (
          chartComponents[chartType]()
        ) : (
          <div>No chart available</div>
        )}
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
