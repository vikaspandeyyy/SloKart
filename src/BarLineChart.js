import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const pdata = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      cv: 4000,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      cv: 3500,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      cv: 3000,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      cv: 2000,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      cv: 1500,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      cv: 1500,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      cv: 3200,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 3090,
      pv: 4300,
      cv: 2200,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 3090,
      pv: 4000,
      cv: 2000,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 4490,
      pv: 2300,
      cv: 1200,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 3200,
      cv: 2200,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 3490,
      pv: 4300,
      cv: 3200,
      amt: 2100,
    },
  ];

const BarLineChart = () => {
  return (
    <>
    <div className="graph">
    <div className="graph_heading">
      <h1 className="Graph_title">TOP SUPPLIES</h1>
      <OpenInNewIcon
        style={{ fontSize: "16", marginLeft: "5" }}
      ></OpenInNewIcon>
    </div>
  </div>
  <div className="graph_name G-name">
    <h5>Supplies 1</h5>
    <h5>Supplies 2</h5>
    <h5>Supplies 3</h5>
  </div>
    <ResponsiveContainer aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 0,
            right: 50,
            left: 30,
            bottom: 15,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" style={{fontSize:"10"}} />
          <YAxis style={{fontSize:"10"}}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          <Bar dataKey="cv" stackId="a" fill="#394A7E" />
        </BarChart>
      </ResponsiveContainer>
      </>
  )
}

export default BarLineChart