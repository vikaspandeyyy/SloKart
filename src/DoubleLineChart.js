import React from 'react'
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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


const DoubleLineChart = () => {
  return (
    <>
    <div className="graph">
      <div className="graph_heading">
        <h1 className="Graph_title">TOTAL SALES</h1>
        <OpenInNewIcon
          style={{ fontSize: "16", marginLeft: "5" }}
        ></OpenInNewIcon>
      </div>
    </div>
    <div className="graph_name G-name">
    <h5>Orders</h5>
    <h5>On-time shipment</h5>
  </div>
    <ResponsiveContainer>
      <LineChart
        width={500}
        height={200}
        data={data}
        syncId="anyId" 
        margin={{
          top: 0,
          right: 50,
          left: 30,
          bottom: 140,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" style={{fontSize:"10"}} />
        <YAxis style={{fontSize:"10"}} />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} fill="#527DFF" dot={false} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} fill="#527DFF" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </>
    )
}

export default DoubleLineChart