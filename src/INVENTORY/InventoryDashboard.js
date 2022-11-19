import React from "react";
// import salesAnalyticsImg from "./TotalAssetWorth.png";
// import ordersFromImg from "./OrderFrom.png";
// import NumberCategoryImg from "./NoOfCategories.png";
// import inventoryTurnoverImg from "./InventoryTurnover.png";
import NavBar from "../NavBar";
import CardRender from "../DashboardCardRender";
import DashboardTablesRender from "../DashboardTablesRender";
import { InventoryCardData } from "../Dashboard card data";
import {
  INVENTORYDBInOutTableData,
  INVENTORYDBSupplierTableData,
} from "../DashboardTablesData";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SingleLineChart from "../SingleLineChart";
import BarLineChart from "../BarLineChart";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SecondBiChart from "../SecondBiChart";
import OnlyLineChart from "../OnlyLineChart";

export default function InventoryDashboard() {
  return (
    <>
      <NavBar />
      <div>
        <p className="title">
          <span className="title_line"></span>
          <span className="business_title">Inventory Management</span>
          <span className="color"> &#62; </span>
          <span className="color"> Dashboard</span>
        </p>
      </div>
      <div id="Right-content-Down-First">
        <h2>Dashboard</h2>
        <div id="Right-content-Down-Filters">
          <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
            Add Recruitment
          </Button>
          <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
            Add an employee
          </Button>
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
        <CardRender comp={InventoryCardData} />
      </div>

      <div id="" className="Dashboard-graph-parent">
        <div className="dashboard-graph">
          <div className="graph">
            <div className="graph_heading">
              <h1 className="Graph_title">TOTAL ASSET WORTH</h1>
              <OpenInNewIcon
                style={{ fontSize: "16", marginLeft: "5" }}
              ></OpenInNewIcon>
            </div>
          </div>
          <div className="graph_name G-name">
            <h5>Total Worth</h5>
            <h5>Total Sold</h5>
          </div>
          <SingleLineChart />
        </div>

        <div className="dashboard-graph">
          <div className="graph">
            <div className="graph_heading">
              <h1 className="Graph_title">ORDERS FORMS</h1>
              <OpenInNewIcon
                style={{ fontSize: "16", marginLeft: "5" }}
              ></OpenInNewIcon>
            </div>
          </div>
          <div className="graph_name G-name">
            <h5>Amazon</h5>
            <h5>Shopify</h5>
            <h5>FLipkart</h5>
          </div>
          <SecondBiChart />
        </div>
      </div>

      {/* Here I rendered the dashboard table1 */}

      <DashboardTablesRender table1Name={INVENTORYDBSupplierTableData} />
      <div id="" className="Dashboard-graph-parent">
        <div className="dashboard-graph">
          <div className="graph">
            <div className="graph_heading">
              <h1 className="Graph_title">NUMBER OF CATEGORIES</h1>
              <OpenInNewIcon
                style={{ fontSize: "16", marginLeft: "5" }}
              ></OpenInNewIcon>
            </div>
          </div>
          <OnlyLineChart />
        </div>
        <div className="dashboard-graph">
          <div className="graph">
            <div className="graph_heading">
              <h1 className="Graph_title">INVENTORY TURNOVER</h1>
              <OpenInNewIcon
                style={{ fontSize: "16", marginLeft: "5" }}
              ></OpenInNewIcon>
            </div>
          </div>
          <OnlyLineChart />
        </div>
      </div>
      <DashboardTablesRender table1Name={INVENTORYDBInOutTableData} />
    </>
  );
}
