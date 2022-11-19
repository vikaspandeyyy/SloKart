import React from "react";
import DroughtCircle from "./DroughtCircle";

const SalesBreakdown = () => {
  return (
    <>
      <div className="graph">
        <div className="graph_heading">
          <h1 className="Graph_title">SALES BREAKDOWN</h1>
        </div>
      </div>
      <div className="graph_name P-name">
        <h5>Category 1</h5>
        <h5>Category 2</h5>
        <h5>Category 3</h5>
      </div>
      <DroughtCircle />
    </>
  );
};

export default SalesBreakdown;
