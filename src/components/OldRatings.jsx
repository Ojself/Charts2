import React from "react";
import Chart from "chart.js";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CustomAxisTick,
  CustomBarLabel,
  LineChart,
  Line,
  CartesianGrid
} from "recharts";

const Rating = ({ rating }) => {
  return (
    <BarChart width={600} height={300} data={[{ data: 200 }]}>
      <XAxis dataKey="name" tick={[{ value: 200 }]} />
      <YAxis />
      <Bar
        type="monotone"
        dataKey="uv"
        barSize={30}
        fill="#8884d8"
        label={200}
      />
    </BarChart>
  );
};

export default Rating;
