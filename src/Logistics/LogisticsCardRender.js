import React from 'react'
export default function LogisticsCardRender(props) {
  return props.comp.map((val)=>{
    return(
        <span className="log-card">
          <div className="log-card-up">
            <div className="log-card-up-data">
              <h1>{val.card1up1}</h1>
            </div>
          </div>
          <p className="log-card-dn-p">{val.card1dnP}</p>
        </span>
    )
  })
}