import React, { useState } from "react";
import NavBar from "../NavBar";
import SearchIcon from "@mui/icons-material/Search";
import "./Finance.css";
import CardRender from "../DashboardCardRender";
import { FinanceCardData } from "../Dashboard card data";
import CurrentCardRender from "../CurrentCardRender";
import CurrentData from "../CurrentData";
import FinanceTableRender from "./FinanceTableRender";
import { TableData } from "../Dashboard Table data";
import { Liability } from "../Dashboard Table data";
import FinanceLiabilityTable from "./FinanceLiabilityTable";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const FINANCETRANSACTIONSTABLE = [
  {
    td1: "INV-3066",
    td2: "Bedanta Baruah",
    td3: `Bedanta Baruah`,
    td4: "Paid",
    td5: "1799",
    td6: "01.01.2022",
    td7: "10:20:55",
    td8: "UPI",
    td9: "VIEW DETAILS",
  },
  {
    td1: "INV-7865",
    td2: "Mohit Gopal",
    td3: `Mohit Gopal`,
    td4: "Unpaid",
    td5: "7999",
    td6: "01.01.2022",
    td7: "10:20:55",
    td8: "Net Banking",
    td9: "VIEW DETAILS",
  },
  {
    td1: "INV-9874",
    td2: "Bedanta Baruah",
    td3: `Bedanta Baruah`,
    td4: "Overdue",
    td5: "1799",
    td6: "01.01.2022",
    td7: "10:20:55",
    td8: "Debit Card",
    td9: "VIEW DETAILS",
  },
  {
    td1: "INV-7531",
    td2: "Mohit Gopal",
    td3: `Mohit Gopal`,
    td4: "Unpaid",
    td5: "1799",
    td6: "01.01.2022",
    td7: "10:20:55",
    td8: "Credit Card",
    td9: "VIEW DETAILS",
  },
  {
    td1: "INV-8546",
    td2: "Bedanta Baruah",
    td3: `Bedanta Baruah`,
    td4: "Paid",
    td5: "1500",
    td6: "01.01.2022",
    td7: "10:20:55",
    td8: "Net Banking",
    td9: "VIEW DETAILS",
  },
  {
    td1: "INV-3579",
    td2: "Mohit Gopal",
    td3: `Mohit Gopal`,
    td4: "Unpaid",
    td5: "1499",
    td6: "01.01.2022",
    td7: "10:20:55",
    td8: "Cash On Delivery",
    td9: "VIEW DETAILS",
  },
  {
    td1: "INV-9516",
    td2: "Bedanta Baruah",
    td3: `Bedanta Baruah`,
    td4: "Overdue",
    td5: "1399",
    td6: "01.01.2022",
    td7: "10:20:55",
    td8: "Cash On Delivery",
    td9: "VIEW DETAILS",
  },
];

const FinanceDashboard = () => {
  const [count, setCount] = useState([]);

  return (
    <>
      <NavBar />
      <div>
        <p className="title">
          <span className="title_line"></span>
          <span className="Finance_title">Finance </span>
          <span className="color"> &#62; </span>
          <span className="color"> Dashboard</span>
        </p>
      </div>
      <div className="dashborad_title">
        <h1>Dashboard</h1>
      </div>
      <div id="right-content-cards">
        <CardRender comp={FinanceCardData} />
      </div>
      <div className="current_data_table">
        <div>
          <FinanceTableRender data={TableData} />
        </div>
        <div>
          <FinanceLiabilityTable data={Liability} />
        </div>
      </div>
      <div id="content-cards">
        <CurrentCardRender data={CurrentData} />
      </div>
      <div id="OMS-main-content">
        <div className="order-list-box" style={{ width: "100%" }}>
          <div className="table_heading">
            <h4>TRANSACTIONS</h4>
            <OpenInNewIcon
              style={{ fontSize: "16", marginLeft: "5" }}
            ></OpenInNewIcon>
          </div>
          <div id="click-data">
            <p>All Invoice</p>
            <p>Open Invoice</p>
            <p>Past Invoice</p>
          </div>
          <div className="order-list-input-box">
            <div className="order-list-input-left">
              <input
                type="text"
                placeholder="Search by invoice ID, category"
                onChange={(val) => {
                  setCount(
                    FINANCETRANSACTIONSTABLE.filter((x) =>
                      x.td1.match(val.target.value)
                    )
                  );
                }}
              />
              <div className="searchIcon">
                <SearchIcon
                  style={{
                    color: "#fff",
                    width: "20",
                    height: "20",
                    margin: "5 5",
                  }}
                ></SearchIcon>
              </div>
            </div>
            <div className="order-list-input-right">
              <select name="" id="" className="order-list-input-right-filters">
                <option value="" selected>
                  Filter
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <select name="" id="" className="order-list-input-right-filters">
                <option selected>Order Status</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button className="order-list-input-right-filters">
                Export List
              </button>
            </div>
          </div>
          <table style={{ textAlign: "center" }}>
            <tr>
              <th>Invoice ID</th>
              <th>Bill to name</th>
              <th>Ship to name</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
              <th>Details</th>
            </tr>
            <hr />
            {count.length > 0
              ? count.map((val) => {
                  return (
                    <tr>
                      <td>{val.td1}</td>
                      <td>{val.td2}</td>
                      <td>{val.td3}</td>
                      <td>{val.td4}</td>
                      <td>{val.td5}</td>
                      <td>{val.td6}</td>
                      <td>{val.td7}</td>
                      <td>{val.td8}</td>
                      <td>{val.td9}</td>
                    </tr>
                  );
                })
              : FINANCETRANSACTIONSTABLE.map((val) => {
                  return (
                    <tr style={{ lineHeight: "15px" }}>
                      <td className="table_id">{val.td1}</td>
                      <td>{val.td2}</td>
                      <td>{val.td3}</td>
                      <td className="status">{val.td4}</td>
                      <td>{val.td5}</td>
                      <td>{val.td6}</td>
                      <td>{val.td7}</td>
                      <td>{val.td8}</td>
                      <td>{val.td9}</td>
                    </tr>
                  );
                })}
          </table>
        </div>
      </div>
    </>
  );
};

export default FinanceDashboard;
