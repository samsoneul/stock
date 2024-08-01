import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { convertUnixTimeStampToDate } from "../Helpers/Date-Helper";
const formatData = (data) => {
  return data.c.map((item, index) => {
    return {
      value: item.toFixed(2),
      date: convertUnixTimeStampToDate(data.t[index]),
    };
  });
};

const renderRadarChart = (data, xData, yData) => {
  return (
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
export default renderRadarChart;
