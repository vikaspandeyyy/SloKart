import React from "react";
// import searchWhiteIcon from "../Icon.png";
import "../OMS order list.css";
import NavBar from "../NavBar";
export default function WarehouseSuppliers(props) {
  return (
    <>
      <NavBar />
      <div id="Right-content-Down-First">
        <h2>Suppliers</h2>
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
            <p>All Suppliers</p>
            <p>Recently Added</p>
            <p>Recently Removed</p>
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
              <th>Supplier ID</th>
              <th>Supplier Name</th>
              <th>Company Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Postal Code</th>
              <th>Contact Number</th>
            </tr>
            {OMSOrderListData.map((val) => {
              return (
                <tr>
                  <td>{val.supplierId}</td>
                  <td>{val.supplierName}</td>
                  <td>{val.companyName}</td>
                  <td>{val.address}</td>
                  <td>{val.city}</td>
                  <td>{val.postalCode}</td>
                  <td>{val.contactNo}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export const OMSOrderListData = [
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
  {
    "supplierId": "KCVF112L",
    "supplierName": "John Doe",
    'companyName':'Nike',
    'address': `Karol Bagh, Delhi`,
    'city': 'Delhi',
    'postalCode': '122015',
    'contactNo': 98568745955,
  },
];
