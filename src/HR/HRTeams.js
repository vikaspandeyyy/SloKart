import React from "react";
import NavBar from "../NavBar.js";
// import searchWhiteIcon from "../Icon.png";
export default function HRTeams() {
    return (
        <>
          <NavBar />
          <div id="Right-content-Down-First">
            <h2>Teams</h2>
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
            <div className="order-list-box" style={{ width: "99%" }}>
              <div id="click-data">
                <p>Active</p>
                <p>Resigned</p>
                <p>Terminated</p>
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
                  <th>Team Code ID</th>
                  <th>Leader Name</th>
                  <th>Team Name</th>
                  <th>Department</th>
                  <th>Project Duration</th>
                  <th>Made On</th>
                  <th>Deadline</th>
                  <th>Made On</th>
                  <th>Contact no</th>
                </tr>
                {HRTeamsData.map((val) => {
                  return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.lName}</td>
                      <td>{val.teamName}</td>
                      <td>{val.dept}</td>
                      <td>{val.projectDuration}</td>
                      <td>{val.madeOn}</td>
                      <td>{val.deadline}</td>
                      <td>{val.shift}</td>
                      <td>{val.contact}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </>
      );
}
export const HRTeamsData = [
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "lName": "John Doe",
      'teamName': 'Digital Marketing',
      'dept':'Testing',
      'projectDuration': `6 months`,
      'madeOn': '28-06-2022',
      'deadline': '28-06-2022',
      'shift': 'Shift A',
      'contact': 9855254618
    },
  ];