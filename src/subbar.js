import React from "react";
import ReactDOM from "react-dom";
import SubbarContent from "./subbarContent";
import gearIcon from "./gear Icon.png";
import arrowImg from "./Vector.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Subbar(props) {
  let x = 1;
  function slide() {
    let right_content = document.getElementById("Right-content");
    let logo = document.getElementById("logo");
    let left_subbar = document.getElementById("left-subbar");
    let slide = document.getElementById("slider");
    if (x === 1) {
      logo.style.transform = "rotate(180deg)";
      right_content.setAttribute("style", "width:100%;margin-left:0px");
      left_subbar.setAttribute("style", "transform: translate(-216px)");
      slide.setAttribute(
        "style",
        "transform-origin: right;transform: rotateY(180deg)"
      );
      x = 0;
    } else {
      logo.style.transform = "rotate(0deg)";
      left_subbar.setAttribute(
        "style",
        "position:fixed;transform: translate(0px)"
      );
      right_content.setAttribute("style", "margin-left:216px");
      slide.setAttribute(
        "style",
        "transform-origin: right;transform: rotateY(0deg)"
      );
      x = 1;
    }
  }
  return (
    <>
      <div id="left-subbar-up-content">
        <div id="brand-name">
          <span></span>
          <a href="">
            <h3>Slokart</h3>
          </a>
          <div id="slider" onClick={slide}>
            {/* <img src={arrowImg} alt="" width="6px" /> */}
            <ArrowForwardIosIcon style={{color:"#000"}}></ArrowForwardIosIcon>
          </div>
        </div>
        <div id="dashboard-content">
          <div id="o-management-para">
            <p>{props.moduleTitle}</p>
            <div
              style={{
                backgroundColor: "white",
                marginTop: "10px",
                height: "3px",
                width: "40px",
              }}
            ></div>
          </div>
          <SubbarContent name={props.name} />
        </div>
      </div>
      <div id="subbar-setting">
        {/* <img src={gearIcon} alt="" width="15px" /> */}
        <SettingsIcon/>
        <p>System Setup</p>
      </div>
    </>
  );
}
function SubbarRender(Title, Link) {
  return ReactDOM.render(
    <Subbar moduleTitle={Title} name={Link} />,
    document.getElementById("left-subbar")
  );
}
export { SubbarRender };
