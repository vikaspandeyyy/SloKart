import React from "react";
// import perfectOrderRateImg from "./perfectOrderRate.png";
// import warehouseOperatingCostDistImg from "./warehouseOperatingCostDist.png";
import NavBar from "../NavBar";
import LogisticsCardRender from "./LogisticsCardRender";
import './LogisticsDashboard.css'
import {LogisticsCardUpData,LogisticsCardDnData} from './LogisticsCardData'
export default function LogisticsDashboard() {
  return (
    <>
      <NavBar />
      <div id="Right-content-Down-First">
        <h2>Dashboard</h2>
        <div id="Right-content-Down-Filters">
          <p>Till Now:</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <div
            style={{
              "border-left": "1px solid rgba(128, 128, 128, 0.511)",
              height: "80%",
            }}
          ></div>
          <label htmlFor="Starting-month">Sort from:</label>
          <input type="date" id="Starting-month" />
          <label htmlFor="Ending-month">To:</label>
          <input type="date" placeholder="Ending month" id="Ending-month" />
          <div
            style={{
              "border-left": "5px dotted rgba(0, 0, 0, 0.989)",
              height: "60%",
            }}
          ></div>
        </div>
      </div>
      <div id="right-content-cards">
        <LogisticsCardRender comp={LogisticsCardUpData} />
      </div>
      <div id="" className="Dashboard-graph-parent">
        <div className="dashboard-graph">
          {/* <img src={perfectOrderRateImg} alt="" width="100%" height="100%" /> */}
        </div>
        <div className="dashboard-graph">
          {/* <img src={warehouseOperatingCostDistImg} alt="" width="100%" height="100%" /> */}
        </div>
      </div>
      <div id="right-content-cards">
        <LogisticsCardRender comp={LogisticsCardDnData} />
      </div>
    </>
  );
}
