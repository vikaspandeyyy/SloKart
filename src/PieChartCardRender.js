import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const PieChartCardRender = () => {
  return (
    <>
      <span className="card">
        <div className="card-up">
          <div className="card-up-data">
            <h1>Rs.1,23,000</h1>
            <p>cash invested</p>
          </div>
          <p className="card-up-per"><TrendingUpIcon style={{color:"#20BF55"}}/>20%</p>
          <p style={{paddingBottom:'4px'}}>3.2% less than last month</p>
        </div>
        <p className="card-dn-p">ADS STATS</p>
      </span>
    </>
  );
};

export default PieChartCardRender;
