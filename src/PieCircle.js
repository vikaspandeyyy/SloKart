import React, { useState } from "react";

import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { name: "User's Carts", value: 24, pName: 137 },
  { name: "User's Carts", value: 30, pName: 137 },
  { name: "User's Carts", value: 18, pName: 137 },
  { name: "User's Carts", value: 12, pName: 137 },
];

const COLORS = [" #FDC260", "#FB777D", "#997EEE", "#49E0D2"];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="0000">
        {payload.pName}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value}%`}</text>
    </g>
  );
};

const PieCircle = () => {
    const [activeIndex, setActiveIndex] = useState([0, 1, 2, 3]);

  return (
     <ResponsiveContainer width="50%" height="80%">
        <PieChart width={300} height={300}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            isAnimationActive={false}
            data={data}
            cx={180}
            cy={150}
            innerRadius={60}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            // onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Tooltip /> */}
        </PieChart>
      </ResponsiveContainer>
  )
}

export default PieCircle