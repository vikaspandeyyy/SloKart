import React, { useState } from "react";
import ReactDOM from "react-dom";
import RightAll from "./Main Content";
export default function SubbarContent(props) {
  const [set, setSet] = useState();
  return props.name.map((val) => {
    return (
      <>
        <div
          className="dashboard-content-list"
          id="dashboard"
          onClick={()=>ReactDOM.render(
            <val.click />,
            document.getElementById("Right-content")
          )}
        >
          {/* <img src={val.img} alt="" width="16px" /> */}
          <p>{val.name}</p>
        </div>
      </>
    );
  });
}
