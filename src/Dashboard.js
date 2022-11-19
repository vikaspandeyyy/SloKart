import React from "react";
import ReactDOM from "react-dom";
// import salesAnalyticsImg from "./Sales Analytics.png";
// import ordersFromImg from "./Order KPI.png";
// import NumberCategoryImg from "./Number of Category.png";
// import inventoryTurnoverImg from "./Inventory Turnover.png";
import NavBar from "./NavBar";
import CardRender from "./DashboardCardRender";
import DashboardTablesRender from "./DashboardTablesRender";
export default function Dashboard(props) {
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
        <CardRender comp={props.card} />
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

      {props.showTable1 && <DashboardTablesRender table1Name={props.table1} />}
      <div id="" className="Dashboard-graph-parent">
        <div className="dashboard-graph">
          {/* <img src={NumberCategoryImg} alt="" width="100%" height="100%" /> */}
        </div>
        <div className="dashboard-graph">
          {/* <img src={inventoryTurnoverImg} alt="" width="100%" height="100%" /> */}
        </div>
      </div>
      {props.showTable2 && <DashboardTablesRender table1Name={props.table2} />}
    </>
  );
}
function DashboardRender(props) {
  return ReactDOM.render(
    <Dashboard
      card={props.card}
      table1={props.table1}
      table2={props.table2}
      showTable1={props.showTable1}
      showTable2={props.showTable2}
    />,
    document.getElementById("Right-content")
  );
}
export { DashboardRender };
