import React from "react";
// import searchWhiteIcon from "../Icon.png";
import "../OMS order list.css";
import NavBar from "../NavBar";
export default function WarehouseProducts(props) {
  return (
    <>
      <NavBar />
      <div id="Right-content-Down-First">
        <h2>Products</h2>
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
              <th>Product ID</th>
              <th>SKU</th>
              <th>Supplier</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Value</th>
              <th>Location</th>
              <th>Reorder Level</th>
              <th>Reorder Days</th>
            </tr>
            {OMSOrderListData.map((val) => {
              return (
                <tr>
                  <td>{val.productId}</td>
                  <td>{val.sku}</td>
                  <td>{val.supplier}</td>
                  <td>{val.item}</td>
                  <td>{val.qty}</td>
                  <td>{val.value}</td>
                  <td>{val.location}</td>
                  <td>{val.reorderLevel}</td>
                  <td>{val.reorderDays}</td>
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
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
  {
    "productId": "KCVF112L",
    "sku": "John Doe",
    'supplier':'John Doe',
    'item': `Nike men's air zoom shoe`,
    'qty': 5,
    'value': 9999,
    'location': 'Warehouse Name',
    'reorderLevel': 14,
    'reorderDays': 14
  },
];
