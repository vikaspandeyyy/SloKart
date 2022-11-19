import React, { useState } from "react";
import NavBar from "../NavBar";
import "./HRPayroll.css";
import HRPayrollWindow, { hrPayrollCardData } from "./HRSideWindow";
// import searchWhiteIcon from "../Icon.png";
export default function HRPayroll() {
  const [count, setCount] = useState([]);
  return (
    <>
      <NavBar />
      <div id="Right-content-Down-First">
        <h2>Payroll</h2>
        <div id="Right-content-Down-Filters">
          <div
            style={{
              "border-left": "5px dotted rgba(0, 0, 0, 0.989)",
              height: "80%",
            }}
          ></div>
        </div>
      </div>
      <div id="OMS-main-content">
        <div className="hr-order-list-box">
          <div id="click-data">
            <p>Active</p>
            <p>Resigned</p>
            <p>Terminated</p>
          </div>
          <div className="order-list-input-box">
            <div className="order-list-input-left">
              <input
                type="text"
                onChange={(val) => {
                  setCount(
                    HRPayrollData.filter((x) =>
                      x.employeeId.match(val.target.value)
                    )
                  );
                }}
              />
              {/* <img src={searchWhiteIcon} alt="" width="" /> */}
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
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Department Name</th>
              <th>Pay</th>
              <th>Joined On</th>
              <th>Total Time</th>
            </tr>
            {count.length > 0
              ? count.map((val) => {
                  return (
                    <tr>
                      <td>{val.employeeId}</td>
                      <td>{val.employeeName}</td>
                      <td>{val.deptName}</td>
                      <td>{val.pay}</td>
                      <td>{val.joinedOn}</td>
                      <td>{val.totalTime}</td>
                    </tr>
                  );
                })
              : HRPayrollData.map((val) => {
                  return (
                    <tr>
                      <td>{val.employeeId}</td>
                      <td>{val.employeeName}</td>
                      <td>{val.deptName}</td>
                      <td>{val.pay}</td>
                      <td>{val.joinedOn}</td>
                      <td>{val.totalTime}</td>
                    </tr>
                  );
                })}
          </table>
        </div>
        <HRPayrollWindow cardName={hrPayrollCardData} />
      </div>
    </>
  );
}
export const HRPayrollData = [
  {
    employeeId: "XAXDATS123DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XAXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XDXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XCXDATS123DS",
    employeeName: "Sonu Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
  {
    employeeId: "XBXDATS125DS",
    employeeName: "John Doe",
    deptName: "Digital Marketing",
    pay: 120000,
    joinedOn: "28-06-2022",
    totalTime: "18 months",
  },
];
