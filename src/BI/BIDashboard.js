import React from "react";
import NavBar from "../NavBar";
import BICardRender from "./BICardRender";
import "./Business.css";
import { BICardUpData } from "./BICardData";
import PieChartCardRender from "../PieChartCardRender";
// import PiechartDnCardRender from '../PiechartDnCardRender'
// import DoubleLine from '../DoubleLine'
import SingleLineChart from "../SingleLineChart";
import BarLineChart from "../BarLineChart";
import SingleRefLineChart from "../SingleRefLineChart";
import PieGraph from "./PieGraph";
import SalesBreakdown from "../SalesBreakdown";
import TopProducts from "../TopProducts";

const BIDashboard = () => {
  return (
    <div>
      <NavBar />
      <div>
        <p className="title">
          <span className="title_line"></span>
          <span className="business_title">Business Intelligence </span>
          <span className="color"> &#62; </span>
          <span className="color"> Dashboard</span>
        </p>
      </div>
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
        <PieChartCardRender />
        <PieChartCardRender />
        <PieChartCardRender />
        <PieChartCardRender />
        <PieChartCardRender />
      </div>

      {/* <div id="right-content-cards">
        <PiechartDnCardRender/>
      </div> */}
      <div id="graph">
        <SingleLineChart />
      </div>
      <div id="right-content-cards">
        <BICardRender comp={BICardUpData} />
      </div>
      <div id="B-graph">
        <BarLineChart />
      </div>
      <div id="graph">
        <SingleRefLineChart />
      </div>
      <div id="graph">
        <PieGraph />
      </div>
      <div id="p_graph">
        <SalesBreakdown />
      </div>
      <div id="graph">
        <TopProducts />
      </div>
    </div>
  );
};

export default BIDashboard;
