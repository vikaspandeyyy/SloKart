import React from "react";
// import searchWhiteIcon from "../Icon.png";
import "../OMS order list.css";
import NavBar from "../NavBar";
export default function InventoryReturns(props) {
  return (
    <>
      <NavBar />
      <div id="Right-content-Down-First">
        <h2>Returns</h2>
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
        <div className="order-list-box" style={{width: '99%'}}>
          <div id="click-data">
            <p>All Products</p>
            <p>Pending</p>
            <p>Approved</p>
            <p>Shipped</p>
            <p>Received</p>
            <p>Resolved</p>
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
              <th>Order ID</th>
              <th>Customer</th>
              <th>Item</th>
              <th>Delivery Date</th>
              <th>Return Date</th>
              <th>Quantity</th>
              <th>Total Value</th>
              <th>Order Status</th>
            </tr>
            {OMSOrderListData.map((val) => {
              return (
                <tr>
                  <td>{val.id}</td>
                  <td>{val.customerName}</td>
                  <td>{val.item}</td>
                  <td>{val.deliveryDate}</td>
                  <td>{val.returnDate}</td>
                  <td>{val.qty}</td>
                  <td>{val.totalValue}</td>
                  <td>{val.orderStatus}</td>
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
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
  {'id': "KCVF112L",'customerName': "John Doe",'item': `Nike men's air zoom shoe`,'deliveryDate': '12 - 12 - 12','returnDate': "15-01-13",'qty':5,'totalValue': 9995,'orderStatus': "Approved",},
];
