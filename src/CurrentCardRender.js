import React from "react";

const CurrentCardRender = (props) => {
  return props.data.map((val) => {
    return (
      <div className=" current">
        <h3>{val.dataheading}</h3>
        <div className="card_details">
        <div className="left">
          <p>{val.circledataup}</p>
          <p>{val.circledatadn}</p>
        </div>
        <div className="right">
          <h5>{val.firstpara}</h5>
          <p>{val.secondpara}</p>
        </div>
        </div>
      </div>
    );
  });
};

export default CurrentCardRender;
