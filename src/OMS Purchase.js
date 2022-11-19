import React from "react";
// import searchWhiteIcon from "./Icon.png";
import "./OMS Purchase.css";
import NavBar from "./NavBar";
import OMSPurchaseWindow from "./OMSPurchaseWindow";
export default function OMSPurchaseList(props) {
  return (
    <>
      <NavBar />
      <div id="Right-content-Down-First">
        <h2>Purchase</h2>
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
        <div className="order-list-box">
          <div id="click-data">
            <p>All Orders</p>
            <p>Confirmed</p>
            <p>Cancelled</p>
          </div>
          <div className="order-list-input-box">
            <div className="order-list-input-left">
              <input type="text" />
              {/* <img src={searchWhiteIcon} alt="" width="" /> */}
            </div>
            <div className="order-list-input-right">
              <select name="" id="" className="order-list-input-right-filters">
                <option value="" selected>
                  Quantity
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
              <th>Customer Name</th>
              <th>Returned Item</th>
              <th>Purchase Date</th>
              <th>Amount</th>
              <th>Delivery Status</th>
              <th>Payment Method</th>
            </tr>
            {OMSPurchaseListData.map((val) => {
              return (
                <tr>
                  <td>{val.id}</td>
                  <td>{val.customerName}</td>
                  <td>{val.returnedItem}</td>
                  <td>{val.purchaseDate}</td>
                  <td>{val.amount}</td>
                  <td>{val.deliveryStatus}</td>
                  <td>{val.paymentMethod}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <OMSPurchaseWindow/>
      </div>
    </>
  );
}
export const OMSPurchaseListData = [
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
  {id: "KCVF112L",customerName: "John Doe",returnedItem: `Nike men's air zoom shoe`,purchaseDate: '12 - 12 - 12',amount: 9995,deliveryStatus: "Delivered",paymentMethod: "Creadit Card",},
];