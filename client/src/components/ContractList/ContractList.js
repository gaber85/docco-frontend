import React from 'react';
import './ContractList.css';
// import {css,jsx} from '@emotion/core';

const ContractList = ({contracts}) => {

  // renders each contract with font awesome symbol;
  const view = contracts.map((contract, index) => {
    return (
      <div index-key={index} className="my-contract">
        <i className="fas fa-file-contract" />
        <span className="contract-title">{contract.title}</span>
      </div>
    )
  })

  return (
    <div className="contract-list">
      {view}
    </div>
  )

}

export default ContractList;