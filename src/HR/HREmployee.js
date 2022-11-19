import React from "react";
import NavBar from "../NavBar.js";
// import searchWhiteIcon from "../Icon.png";
export default function HREmployee() {
    return (
        <>
          <NavBar />
          <div id="Right-content-Down-First">
            <h2>Employee</h2>
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
                  <th>ID Code</th>
                  <th>Full Name</th>
                  <th>Designation</th>
                  <th>Department</th>
                  <th>Type</th>
                  <th>Joining Date</th>
                  <th>Shift Timing</th>
                  <th>Contact no</th>
                </tr>
                {HREmployeeData.map((val) => {
                  return (
                    <tr>
                      <td>{val.id}</td>
                      <td>{val.fName}</td>
                      <td>{val.designation}</td>
                      <td>{val.dept}</td>
                      <td>{val.type}</td>
                      <td>{val.joinDate}</td>
                      <td>{val.shiftTime}</td>
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
export const HREmployeeData = [
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
    {
      "id": "KCVF112L",
      "fName": "John Doe",
      'designation':'Digital Marketing',
      'dept': `Testing`,
      'type': 'Permanent',
      'joinDate': '28-06-2022',
      'shiftTime': 'Shift A',
      'contact': 9855254618
    },
  ];