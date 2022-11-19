import React from "react";
export default function CardRender(props) {
  return props.comp.map((val) => {
    return (
      <>
        <span className="card">
          <div className="card-up"> 
            <div className="card-up-data">
              <h1>{val.card1up1}</h1>
              <p>{val.card1up2}</p>
            </div>
            <p>{val.card1up3}</p>
          </div>
          <p className="card-dn-p">{val.card1dnP}</p>
        </span>
      </>
    );
  }); 
}
