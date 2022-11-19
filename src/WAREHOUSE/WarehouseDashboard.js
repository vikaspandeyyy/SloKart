import React from "react";
// import salesAnalyticsImg from "./MonthlyIncomingItems.png";
// import ordersFromImg from "./POReceivedbySuppliers.png";
// import NumberCategoryImg from "./PickingAccuracy.png";
// import inventoryTurnoverImg from "./WarehousingCosts.png";
import NavBar from "../NavBar";
import CardRender from "../DashboardCardRender";
import DashboardTablesRender from "../DashboardTablesRender";
import { WarehouseCardData } from "../Dashboard card data"; 
import {INVENTORYDBSupplierTableData} from "../DashboardTablesData";
export default function WarehouseDashboard() {
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
        <CardRender comp={WarehouseCardData} />
      </div>
      <div id="" className="Dashboard-graph-parent">
        <div className="dashboard-graph">
          {/* <img src={salesAnalyticsImg} alt="" width="100%" height="100%" /> */}
        </div>
        <div className="dashboard-graph">
          {/* <img src={ordersFromImg} alt="" width="100%" height="100%" /> */}
        </div>
      </div>

      {/* Here I rendered the dashboard table1 */}

      <DashboardTablesRender table1Name={INVENTORYDBSupplierTableData} />
      <div id="" className="Dashboard-graph-parent">
        <div className="dashboard-graph">
          {/* <img src={NumberCategoryImg} alt="" width="100%" height="100%" /> */}
        </div>
        <div className="dashboard-graph">
          {/* <img src={inventoryTurnoverImg} alt="" width="100%" height="100%" /> */}
        </div>
      </div>
    </>
  );
}

