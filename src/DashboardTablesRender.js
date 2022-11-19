import React, { useState } from "react";
// import searchWhiteIcon from "./Icon.png";

export default function DashboardTablesRender(props) {

  const [paid, setPaid] = useState()
  const [unpaid, setUnpaid] = useState()
  const [overdue, setOverdue] = useState()
  
  return (
    <span className="supplier-box">
      <h2>Order Summery / Details</h2>
      <div className="supplier-content-box">
        <p>All orders</p>
        <div className="supplier-content-input-box">
          <div className="supplier-content-input-left">
            <input type="text" />
            {/* <img src={searchWhiteIcon} alt="" height="20px" /> */}
          </div>
          <div className="supplier-content-input-right">
            <select
              name=""
              id=""
              className="supplier-content-input-right-filters"
            >
              <option value="" selected> 
                Quantity
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select
              name=""
              id=""
              className="supplier-content-input-right-filters"
            >
              <option selected>Order Status</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button className="supplier-content-input-right-filters">
              Explore List
            </button>
          </div>
        </div>
        <table style={{ textAlign: "left" }}>
          {props.table1Name.map((val) => {
            return (
              <>
                <tr>
                  <th>{val.th1}</th>
                  <th>{val.th2}</th>
                  <th>{val.th3}</th>
                  <th>{val.th4}</th>
                  <th>{val.th5}</th>
                  <th>{val.th6}</th>
                  <th>{val.th7}</th>
                  <th>{val.th8}</th>
                  <th>{val.th9}</th>
                </tr> 
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
              </>
            );
          })}
        </table>
      </div>
    </span>
  );
}
