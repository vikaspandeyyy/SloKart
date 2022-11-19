import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 1600,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 2500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 1500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 2500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 2700,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3000,
    pv: 4300,
    amt: 2100,
  },
];

const SingleRefLineChart = () => {
  return (
    <>
      <div className="graph">
        <div className="graph_heading">
          <h1 className="Graph_title">Employees Accomplishment</h1>
          <OpenInNewIcon
            style={{ fontSize: "16", marginLeft: "5" }}
          ></OpenInNewIcon> 
        </div>
      </div>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 40,
            right: 50,
            left: 10,
            bottom: 54,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" style={{ fontSize: "10" }} />
          <YAxis
            style={{ fontSize: "10" }}
            tickFormatter={(tick) => {
              return `${tick}%`;
            }}
          />
          <Tooltip />
          <ReferenceLine y={1800} stroke="red" strokeWidth={1}/>
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            strokeWidth={2}
            fill="#527DFF"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SingleRefLineChart;
