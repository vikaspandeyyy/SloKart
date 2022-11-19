import React, { useEffect } from "react";
import {
  AccountingSubbarData,
  BISubbarData,
  CRMSubbarData,
  DropShipSubbarData,
  FinanceSubbarData,
  HRSubbarData,
  InventorySubbarData,
  LogisticSubbarData,
  OMSSubbarData, 
  WarehouseSubbarData,
} from "./subbar data";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SwapIcon from "@mui/icons-material/SwapVertOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import HRIcon from "@mui/icons-material/PersonSearchOutlined";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import FinanceIcon from "@mui/icons-material/PaymentsOutlined";
import WarehouseIcon from "@mui/icons-material/WarehouseOutlined";
import LogisticIcon from "@mui/icons-material/LocalShippingOutlined";
import BIIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import OMSIcon from "@mui/icons-material/Inventory2Outlined";
import DropShipIcon from "@mui/icons-material/SendOutlined";
import "./left icon bar.css";
import { SubbarRender } from "./subbar";
export default function LeftIconBar() {
  let svgDiv = document.getElementsByClassName("svg-div");
  let svgBox = document.getElementsByClassName("svgBox");
  let svgIcon = document.getElementsByClassName("Ico");
  // let SwapIcon = document.getElementById("Swap");
  let SvgClicked = "";
  let preSvgClicked = "";
  let SwapClicked = "";

  // SVG Click Function Start Here

  let SvgClickFun = (e) => {
    console.log(e);
    if (preSvgClicked === "") {
    } else {
      preSvgClicked.setAttribute(
        "style",
        "background-color:rgb(0, 31, 96);border-color:rgb(78, 109, 203);color: rgb(78, 109, 203);"
      );
    }
    if (e.target.localName === "svg") {
      SvgClicked = e.target;
    } else if (e.target.localName === "path") {
      SvgClicked = e.target.parentElement;
    }
    SvgClicked.setAttribute(
      "style",
      "background-color:white;border-color:white;color: rgb(0, 31, 96);"
    );
    preSvgClicked = SvgClicked;
  };

  // SVG Click Function Ends Here

  // SVG Mouse Enter Function Start Here

  let SvgMouseEnterFun = (e) => {
    // e.preventDefault();
    e.target.parentElement.children[2].setAttribute("style", "opacity:100%");
    if (e.target === SvgClicked) {
    } else {
      e.target.setAttribute(
        "style",
        "color:white;background-color:rgb(78, 109, 203)"
      );
    } 
  };

  // SVG Mouse Enter Function Ends Here

  // SVG Mouse Leave Function Starts Here

  let SvgMouseLeaveFun = (e) => {
    // e.preventDefault();

    e.target.parentElement.children[2].setAttribute("style", "opacity:0");
    if (e.target === SvgClicked) {
      return;
    } else {
      e.target.setAttribute(
        "style",
        "color:rgb(78, 109, 203);background-color:rgb(0, 31, 96)"
      );
    }
  };

  // SVG Mouse Leave Function Ends Here

  let x = 0;
  let dragSvg = "";
  function Drag(e) {
    if (e.target.localName === "svg") {
      SwapClicked = e.target;
    } else if (e.target.localName === "path") {
      SwapClicked = e.target.parentElement;
    }
    if (x === 0) {
      SwapClicked.setAttribute(
        "style",
        "background-color:white;border-color:white;color: rgb(0, 31, 96);"
      );
      x = 1;
    } else {
      SwapClicked.setAttribute(
        "style",
        "background-color:rgb(0, 31, 96);border-color:rgb(78, 109, 203);color: rgb(78, 109, 203);"
      );
      x = 0;
    }
    for (let eachSvg of svgBox) {
      eachSvg.addEventListener("dragstart", (d) => {
        d.target.lastElementChild.setAttribute("style", "display: none");
        dragSvg = d.target;
      });
      eachSvg.addEventListener("dragend", (d) => {
        d.preventDefault();
      });
    }
    let dropSvgParent = "";
    for (let eachSvg1 of svgDiv) {
      eachSvg1.addEventListener("dragenter", (d) => {
        d.preventDefault();
      });
      eachSvg1.addEventListener("dragover", (d) => {
        d.preventDefault();
      });
      eachSvg1.addEventListener("drop", (d) => {
        // if (d.target.parentElement.localName === "svg") {
        // let dropSvgParent = d.target.parentElement.parentElement.parentElement;
        // dragSvg.parentElement.append(d.target.parentElement.parentElement);
        // dropSvgParent.append(dragSvg);
        // } else if (d.target.parentElement.localName === "div") {
        dropSvgParent = d.target.parentElement.parentElement;
        dragSvg.parentElement.append(d.target.parentElement);
        dropSvgParent.append(dragSvg);
        // }
      });
    }
  }
  return (
    <div id="left-bar-content">
      <div id="left-icon-bar">
        <a href="www.google.com">
          <img src="logo.png" alt="" width="24px" id="logo" />
        </a>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <HomeIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
              }}
            ></HomeIcon>
            <p className="svg-p">Dashboard</p>
            <span className="badge">Dashboard</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svgBox svg1" draggable="true">
            <ManageAccountsOutlinedIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Accounting", AccountingSubbarData);
              }}
            ></ManageAccountsOutlinedIcon>
            <p className="svg-p">Accounting</p>
            <span className="badge">Accounting</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <HandshakeOutlinedIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Customer Relationship Management", CRMSubbarData);
              }}
            ></HandshakeOutlinedIcon>
            <p className="svg-p">CRM</p>
            <span className="badge">CRM</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <DropShipIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Drop Shipping", DropShipSubbarData);
              }}
            ></DropShipIcon>
            <p className="svg-p">Dropshipping</p>
            <span className="badge">Dropshipping</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <HRIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Human Resource Management", HRSubbarData);
              }}
            ></HRIcon>
            <p className="svg-p">HR</p>
            <span className="badge">HR</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <DashboardIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Inventory Management", InventorySubbarData);
              }}
            ></DashboardIcon>
            <p className="svg-p">Inventory</p>
            <span className="badge">Inventory</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <OMSIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Order Management", OMSSubbarData);
              }}
            ></OMSIcon>
            <p className="svg-p">OMS</p>
            <span className="badge">OMS</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <BIIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Business Intelligence", BISubbarData);
              }}
            ></BIIcon>
            <p className="svg-p">Business Intelligence</p>
            <span className="badge">Business Intelligence</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <LogisticIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Logistics", LogisticSubbarData);
              }}
            ></LogisticIcon>
            <p className="svg-p">Logistics</p>
            <span className="badge">Logistics</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <WarehouseIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Warehouse Management", WarehouseSubbarData);
              }}
            ></WarehouseIcon>
            <p className="svg-p">Warehouse</p>
            <span className="badge">Warehouse</span>
          </div>
        </div>
        <div className="svg-div">
          <div className="svg1 svgBox" draggable="true">
            <FinanceIcon
              sx={{ fontSize: 36 }}
              className="Ico"
              onMouseEnter={(e) => SvgMouseEnterFun(e)}
              onMouseLeave={(e) => SvgMouseLeaveFun(e)}
              onClick={(e) => {
                SvgClickFun(e);
                SubbarRender("Finance", FinanceSubbarData);
              }}
            ></FinanceIcon> 
            <p className="svg-p">Finance</p>
            <span className="badge">Finance</span>
          </div>
        </div>
        <div id="filter">
          <SwapIcon sx={{ fontSize: 36 }} id="Swap" onClick={Drag}></SwapIcon>
          <span className="badge" id="filter-badge">
            Swap Modules
          </span>
        </div>
      </div>
    </div>
  );
}
