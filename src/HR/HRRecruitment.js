import React from 'react'
// import searchWhiteIcon from "../Icon.png";
import NavBar from '../NavBar'
import HRRecruitmentWindow from './HRSideWindow'
import {hrRecruitmentCardData} from './HRSideWindow'
export default function HRRecruitment() {
    return (
      <>
        <NavBar />
        <div id="Right-content-Down-First">
          <h2>Recruitment</h2>
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
              <p>All Recruitment</p>
              <p>Hired</p>
              <p>Rejected</p>
            </div>
            <div className="order-list-input-box">
              <div className="order-list-input-left">
                <input type="text" />
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
                <th>Employee Name</th>
                <th>Department Name</th>
                <th>Expected Salary</th>
                <th>Current CTC</th>
                <th>Offer in Hand</th>
                <th>Joining Date</th>
                <th>Total Time</th>
              </tr>
              {HRRecruitmentData.map((val) => {
                return (
                  <tr>
                    <td>{val.employeeName}</td>
                    <td>{val.deptName}</td>
                    <td>{val.expecSalary}</td>
                    <td>{val.currCtc}</td>
                    <td>{val.offerInHand}</td>
                    <td>{val.joinDate}</td>
                    <td>{val.totalTime}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <HRRecruitmentWindow cardName={hrRecruitmentCardData}/>
        </div>
      </>
    );
  }
  export const HRRecruitmentData=[
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
    {'employeeName':'John Doe','deptName':'Digital Marketing','expecSalary':120000,'currCtc':110000,'offerInHand':120000,'joinDate':'12-08-2022','totalTime':'24 Hours'},
]