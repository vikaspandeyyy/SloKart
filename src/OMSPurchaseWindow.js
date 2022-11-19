import React from "react";

export default function OMSPurchaseWindow() {
  return (
    <div id="PurchaseOrderSmallWindow">
      <small style={{ textAlign: "center" }}>Order Details</small>
      <div id="PurchaseOrderDetail">
        <span style={{ textAlign: "center" }}>
          <b>Delivered</b>
        </span>
        <div>
          <h3>Order Id: 8789546585</h3>
          <small>Ordered On: 18-18-18</small>
        </div>
        <div>
          <p>Contact Details: 7895462548</p>
          <p>Delivery Partner: Ship Rocket</p>
          <p>Delivery Partner Name: Rajeev</p>
          <p>Email Id: sdfsaf@gmail.com</p>
          <p>No of times ordered: 4</p>
        </div>
        <div>
          <small>Items:</small>
          <b>Nike Zoom Air shoe</b>
          <b>Nike Zoom Air shoe</b>
          <b>Nike Zoom Air shoe</b>
          <b>Nike Zoom Air shoe</b>
        </div>
        <div>Total Amount: 28089</div>
      </div>
    </div>
  );
}
