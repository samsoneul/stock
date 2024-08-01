import { XAxis, YAxis, Tooltip, Area, AreaChart } from "recharts";
import { convertUnixTimeStampToDate } from "../Helpers/Date-Helper";
const formatData = (data) => {
  return data.c.map((item, index) => {
    return {
      value: item.toFixed(2),
      date: convertUnixTimeStampToDate(data.t[index]),
    };
  });
};
const renderAreaChart = (data, xData, yData) => {
  return (
    <AreaChart data={formatData(data)}>
      <defs>
        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#b189f5" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#b189f5" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="value"
        stroke="#312e81"
        strokeWidth={0.5}
        fillOpacity={1}
        fill="url(#chartColor)"
      />
      <Tooltip />
      <XAxis dataKey={xData} />
      <YAxis domain={yData} />
    </AreaChart>
  );
};
export default renderAreaChart;
