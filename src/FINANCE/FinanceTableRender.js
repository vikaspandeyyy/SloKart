import React from "react";
import './Finance.css'

const FinanceTableRender = (props) => {
  return props.data.map((val) => {
    return (
      <div className="current-table">
        <h3>CURRENT ASSESTS</h3>
        <table>
          <tr className="table_background">
            <th style={{color:"#fff"}}>Current Assets</th>
            <td style={{color:"#fff"}}>{val.currentassets}</td>
          </tr>
          <tr>
            <th>Cash</th>
            <td>{val.cash}</td>
          </tr>
          <tr>
            <th>Account Receivable</th>
            <td>{val.accountReceivable}</td>
          </tr>
          <tr>
            <th>Inventry</th>
            <td>{val.inventry}</td>
          </tr>
          <tr>
            <th>Pre-Paid Expenses</th>
            <td>{val.prepaidExpense}</td>
          </tr>
        </table>
      </div>
    );
  });
};

export default FinanceTableRender;
