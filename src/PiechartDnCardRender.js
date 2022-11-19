import React from 'react'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const PiechartDnCardRender = () => {
  return (
    <>
    <span className="card">
      <div className="card-up">
        <div className="card-up-data">
          <h1>94.5%</h1>
          <p>20 orders</p>
        </div>
        <p className="card-up-per-dn"><TrendingDownIcon style={{color:"#FF4451"}}/>10%</p>
        <p style={{paddingBottom:'4px'}}>3.2% less than last month</p>
      </div>
      <p className="card-dn-p">PERFECT ORDER DATE</p>
    </span>
  </>
  )
}

export default PiechartDnCardRender