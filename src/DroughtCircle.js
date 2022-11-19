import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "78.2%", value: 700 },
  { name: "28.2%", value: 200 },
  { name: "38.2%", value: 200 },
];
const COLORS = ["#4E6DCB", " #E15759", "#20BF55"];

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
    percent,
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
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#000">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={52}
        outerRadius={88}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const DroughtCircle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <>
    <ResponsiveContainer width="40%" height="60%">
      <PieChart >
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={120}
          cy={100}
          innerRadius={55}
          outerRadius={85}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </>
  );
};

export default DroughtCircle;
