import React from "react";
// import searchWhiteIcon from "./Icon.png";
import "./OMS order list.css";
import NavBar from "./NavBar";
export default function InventoryPurchase(props) {
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
        <div className="order-list-box" style={{ width: "99%" }}>
          <div id="click-data">
            <p>All Products</p>
            <p>Overdue</p>
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
              <th>PO Number</th>
              <th>Supplier</th>
              <th>Item Name</th>
              <th>Delivery Date</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Total Value</th>
              <th>Order Status</th>
            </tr>
            {InventoryPurchaseData.map((val)=>{return(
            <tr>
              <td>{val.td1}</td>
              <td>{val.td2}</td>
              <td>{val.td3}</td>
              <td>{val.td4}</td>
              <td>{val.td5}</td>
              <td>{val.td6}</td>
              <td>{val.td7}</td>
              <td>{val.td8}</td>
            </tr>)})}
          </table>
        </div>
      </div>
    </>
  );
}
export const InventoryPurchaseData=[
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
  {td1:'KCVF12L',td2:'John Doe',td3:'Nike shoes air zoom for men',td4:'01-01-2022',td5:995,td6:15,td7:9995,td8:'Purchased'},
]
