import React from "react";
import './left subBar.css'
import arrowImg from './Vector.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SettingsIcon from '@mui/icons-material/Settings';

function LeftSubBar() {
    let x = 1;
    function slide() {
      console.log('slider')
        let logo = document.getElementById("logo");
        let left_subbar = document.getElementById("left-subbar");
        console.log(left_subbar);
        let slide = document.getElementById("slider");
        if (x === 1) {
            console.log('left')
            logo.style.transform = "rotate(180deg)";
            // right_content.setAttribute("style", "width:100%;margin-left:0px")
            left_subbar.setAttribute("style", "transform: translate(-216px)");
      // right_all.setAttribute("style", "transform: translate(-216px);width:fit-content");
      // right_content.setAttribute("style", "width:1404px");
      slide.setAttribute(
        "style",
        "transform-origin: right;transform: rotateY(180deg)"
      );
      x = 0;
    } else if (x === 0) {
        console.log('right')
      logo.style.transform = "rotate(0deg)";
      left_subbar.setAttribute(
        "style",
        "position:fixed;transform: translate(0px)"
      );
      // right_content.setAttribute("style", "margin-left:216px");
      slide.setAttribute(
        "style",
        "transform-origin: right;transform: rotateY(0deg)"
      );
      x = 1;
    }
  }
  return (
    <div id="left-subbar">
      <div id="left-subbar-up-content">
        <div id="brand-name"> 
          <span></span>
          <a href="/">
            <h3>Slokart</h3>
          </a>
          <div id="slider" onClick={()=>console.log('slide')}>
            {/* <img src={arrowImg} alt="" width="6px" /> */}
            <ArrowForwardIosIcon ></ArrowForwardIosIcon>
          </div>
        </div>
        <div id="dashboard-content">
          <div id="o-management-para">
            <p>Order Management</p>
            <div
              style={{
                "backgroundColor": "white",
                "marginTop": "10px",
                height: "3px",
                width: "40px",
              }}
            ></div>
          </div>
          <div className="dashboard-content-list" id="dashboard">
            <img src="dashboard 1.png" alt="" width="16px" />
            <p>Dashboard (On click)</p>
          </div>
          <div className="dashboard-content-list">
            <img src="order list.png" alt="" width="16px" />
            <p>Order list (Hover state)</p>
          </div>
          <div className="dashboard-content-list">
            <img src="purchase normal state.png" alt="" width="16px" />
            <p>Purchase (Normal state)</p>
          </div>
          <div className="dashboard-content-list">
            <img src="returns.png" alt="" width="16px" />
            <p>Returns</p>
          </div>
          <div className="dashboard-content-list">
            <img src="marketplace.png" alt="" width="16px" />
            <p>Marketplace</p>
          </div>
          <div className="dashboard-content-list">
            <img src="department.png" alt="" width="16px" />
            <p>Department</p>
          </div>
          <div className="dashboard-content-list">
            <img src="reports.png" alt="" width="16px" />
            <p>Reports</p>
          </div>
        </div>
      </div>
      <div id="subbar-setting">
        {/* <img src="gear Icon.png" alt="" width="15px" /> */}
        <SettingsIcon/>
        <p>System Setup</p>
      </div>
    </div>
  );
}
