import React, { useState } from "react";
import { mockHistoricalData } from "../constants";
import Card from "./card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import { convertUnixTimeStampToDate } from "../Helpers/Date-Helper";
import ChartFIlter from "./ChartFIlter";

import { chartsConfig } from "../config";
const Chart = () => {
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFIlter] = useState("1W");
  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStampToDate(data.t[index]),
      };
    });
  };
  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartsConfig).map((item) => {
          return(
          <li key={item}>
            <ChartFIlter
              text={item}
              active={filter === item}
              onClick={() => {
                setFIlter(item);
              }}
            />
          </li>)
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            strokeWidth={0.5}
            fillOpacity={1}
            fill="url(#chartColor)"
          />
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#300061" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#300061" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
      
    </Card>
  );
};

export default Chart;
