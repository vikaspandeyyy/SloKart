import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area,
    BarChart,
    Bar,
  } from "recharts";
  
  const pdata = [
    {
      name: "Jan",
      GrossProfit: 13,
      fees: 30,
    },
    {
      name: "Feb",
      GrossProfit: 30,
      fees: 24,
    },
    {
      name: "MAr",
      GrossProfit: 25,
      fees: 20,
    },
    {
      name: "Apr",
      GrossProfit: 20,
      fees: 25,
    },
    {
      name: "May",
      GrossProfit: 29,
      fees: 34,
    },
    {
      name: "June",
      GrossProfit: 37,
      fees: 24,
    },
    {
      name: "july",
      GrossProfit: 26,
      fees: 28,
    },
    {
      name: "Aug",
      GrossProfit: 28,
      fees: 35,
    },
    {
      name: "Sep",
      GrossProfit: 24,
      fees: 38,
    },
    {
      name: "Oct",
      GrossProfit: 27,
      fees: 34,
    },
    {
      name: "Nov",
      GrossProfit: 35,
      fees: 26,
    },
    {
      name: "Dec",
      GrossProfit: 26,
      fees: 28,
    },
  ];

const DoubleLine = () => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 50, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="name"
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value}
          />
          <YAxis
            tickFormatter={(tick) => {
              return `${tick}%`;
            }}
          />
          <Tooltip contentStyle={{ backgroundColor: "white" }} />
          <Legend />
          <Line
            type="monotoneX"
            dataKey="GrossProfit"
            stroke="blue"
            // activeDot={{ r: 8 }}
          />
          <Line
            type="monotoneX"
            dataKey="fees"
            stroke="green"
            // activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default DoubleLine