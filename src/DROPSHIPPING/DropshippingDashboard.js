import React from "react";
// import salesAnalyticsImg from "./NoOfShipment.png";
// import ordersFromImg from "./SupplierLocation.png";
// import NumberCategoryImg from "./NoOfShipment.png";
// import inventoryTurnoverImg from "./OutOfStockItems.png";
import NavBar from "../NavBar";
import CardRender from "../DashboardCardRender";
import DashboardTablesRender from "../DashboardTablesRender";
import {DropShipCardData} from "../Dashboard card data";
import { INVENTORYDBInOutTableData, INVENTORYDBSupplierTableData } from "../DashboardTablesData";
import TopProducts from "../TopProducts";
import SecondBiChart from "../SecondBiChart";
import DoubleLineChart from "../DoubleLineChart";
import SingleRefLineChart from "../SingleRefLineChart";
export default function DropshippingDashboard() {
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
        <CardRender comp={DropShipCardData} />
      </div>
      <div id="" className="Dashboard-graph-parent">
        <div id="B-graph">
          <DoubleLineChart/>
        </div>
        <div id="B-graph">
        <SecondBiChart />
      </div>
      </div>

      {/* Here I rendered the dashboard table1 */}

      <DashboardTablesRender table1Name={INVENTORYDBSupplierTableData} />
      <div id="" className="Dashboard-graph-parent">
        <div id="B-graph">
          <TopProducts/>
        </div>
        <div id="B-graph">
            <SingleRefLineChart/>
        </div>
      </div>
      <DashboardTablesRender table1Name={INVENTORYDBInOutTableData} />
    </>
  );
}

