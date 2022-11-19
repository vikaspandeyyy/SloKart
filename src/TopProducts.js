import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const TopProducts = () => {
  return (
    <>
      <div className="">
        <div className="graph_heading">
          <h1 className="Graph_title">TOP PRODUCTS</h1>
          <OpenInNewIcon
            style={{ fontSize: "16", marginLeft: "5" }}
          ></OpenInNewIcon>
        </div>
      </div>
      <div className="product-insights">
        <p>
          <a href="">Insights</a>
        </p>
      </div>
      <table className="Product-table">
        <tr>
          <th>Products</th>
          <th>Image</th>
          <th>Quality sold</th>
          <th>Category</th>
          <th>NA</th>
        </tr>
        <tr>
          <td>
            <p>Nike</p>
            <p style={{ color: "#CFCFCF", paddingTop: "5px" }}>₹7999/-</p>
          </td>
          <td>Nike Shoes</td>
          <td>168</td>
          <td>Fashion</td>
          <td>NA</td>
        </tr>
        <tr>
          <td>
            <p>Nike</p>
            <p style={{ color: "#CFCFCF", paddingTop: "5px" }}>₹7999/-</p>
          </td>
          <td>Nike Shoes</td>
          <td>168</td>
          <td>Fashion</td>
          <td>NA</td>
        </tr>
        <tr>
          <td>
            <p>Nike</p>
            <p style={{ color: "#CFCFCF", paddingTop: "5px" }}>₹7999/-</p>
          </td>
          <td>Nike Shoes</td>
          <td>168</td>
          <td>Fashion</td>
          <td>NA</td>
        </tr>
      </table>
    </>
  );
};

export default TopProducts;
