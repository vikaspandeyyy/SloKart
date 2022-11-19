import React from "react";

const BICardRender = (props) => {
  return props.comp.map((val) => {
    return (
      <div className="bi-card">
        <div className="card-bg">
          <div className="card-circle">
            <div className="card-data-up"></div>
            <h6 className="first_para">{val.card1up1}</h6>
          </div>
          <p className="card_para">{val.cardsaleinfo}</p>
          <div className="card-data-dn">
            <p>{val.card1dnP}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default BICardRender;
