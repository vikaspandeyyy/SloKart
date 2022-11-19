import React from "react";
import './Finance.css'

const FinanceLiabilityTable = (props) => {
  return props.data.map((val) => {
    return (
      <div className="current-table">
        <h3>CURRENT LIABILITY</h3>
        <table>
          <tr className="table_background">
            <th style={{color:"#fff"}}>Account Payable</th>
            <td style={{color:"#fff"}}>{val.currentLibilities}</td>
          </tr>
          <tr>
            <th>Credit Card Dept</th>
            <td>{val.accountPayable}</td>
          </tr>
          <tr>
            <th>Bank Operating Credit</th>
            <td>{val.creditcardDept}</td>
          </tr>
          <tr>
            <th>Accrued Expenses</th>
            <td>{val.bankoperatingCredit}</td>
          </tr>
          <tr>
            <th>Taxes Payable</th>
            <td>{val.AccuredExpences}</td>
          </tr>
          <tr>
            <th>Current Liability</th>
            <td>{val.taxesPayable}</td>
          </tr>
        </table>
      </div>
    );
  });
};

export default FinanceLiabilityTable;
