import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PieCircle from "../PieCircle";

const PieGraph = () => {
  return (
    <>
      <div className="graph">
        <div className="graph_heading">
          <h1 className="Graph_title">
            CART ABAMDOMMENT FREQUENCY <br /> OF USERS
          </h1>
          <OpenInNewIcon
            style={{ fontSize: "16", marginLeft: "5" }}
          ></OpenInNewIcon>
        </div>
      </div>
      <span >
        <PieCircle />
        {/* <div >
        <div style={{ display: "flex" ,alignItems:"center"}}>
          <div className="pie-line"></div>
          <div>
            <h6>24</h6>
            <p>Always</p>
          </div>
        </div>
        <div style={{ display: "flex",alignItems:"center" ,padding:"20px 0"}}>
          <div className="pie-line"></div>
          <div>
            <h6>24</h6>
            <p>Always</p>
          </div>
        </div>
        <div style={{ display: "flex",alignItems:"center" }}>
          <div className="pie-line"></div>
          <div>
            <h6>24</h6>
            <p>Always</p>
          </div>
        </div>
        <div style={{ display: "flex",alignItems:"center",padding:"20px 0" }}>
          <div className="pie-line"></div>
          <div>
            <h6>24</h6>
            <p>Always</p>
          </div>
        </div>
        </div> */}
      </span>
    </>
  );
};

export default PieGraph;
