import React from "react";
export default function HRSideWindow(props) {
  return (
    <div id="HRSideWindow"> 
      <div id="hr-right-content-cards">
        {props.cardName.map((val,index) => {
          return (
            <span className={`card card${index+1}`}>
              <div className={`card-up card-up${index+1}`}>
                <div className="card-up-data">
                  <h1>{val.card1up1}</h1>
                  <p>{val.card1up2}</p>
                </div>
                <p>{val.card1up3}</p>
              </div>
              <p className="card-dn-p">{val.card1dnP}</p>
            </span>
          );
        })}
      </div>
    </div>
  );
}
export const hrPayrollCardData = [
  {
    card1up1: "1.2 CrPA",
    card1up2: "budget",
    card1up3: "last increased in 21-08-2021",
    card1dnP: "COMPANY BUDGET",
  },
  {
    card1up1: "78 LPA",
    card1up2: "spending",
    card1up3: "increased by 10% since last month",
    card1dnP: "COMPANY SPENDING",
  },
  {
    card1up1: "24 LPA",
    card1up3: 'leftover increased by 5%',
    card1dnP: "COMPANY BUDGET LEFTOVER",
  },
];
export const hrRecruitmentCardData = [
  {
    card1up1: 20,
    card1up2: "interviews scheduled",
    card1up3: "last increased on 20-01-2022",
    card1dnP: "SCHEDULED",
  },
  {
    card1up1: 10,
    card1up2: "under review",
    card1up3: "increased by 10% since last month",
    card1dnP: "UNDER REVIEW",
  },
  {
    card1up1: 30,
    card1up3: "increased by 5% since last month",
    card1dnP: "HIRED THIS MONTH",
  },
];