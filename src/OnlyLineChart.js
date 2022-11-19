import React from 'react'
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
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

const OnlyLineChart = () => {
  return (
    <>
        <ResponsiveContainer>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId" 
          margin={{
            top: 50,
            right: 50,
            left: 20,
            bottom: 60,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" style={{fontSize:"10"}} />
          <YAxis style={{fontSize:"10"}} />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} fill="#527DFF" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default OnlyLineChart