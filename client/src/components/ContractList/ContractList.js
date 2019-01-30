import React from 'react';
import './ContractList.css';
// import {css,jsx} from '@emotion/core';


const ContractList = () => {

  let z = -1;


  const contracts =
    [{ title: 'My Contract' }, { title: 'My Contract' }, { title: 'My Contract' }, { title: 'My Contract' }, { title: 'My Contract' }, { title: 'My Contract' }, { title: 'My Contract' }, { title: 'My Contract' }, { title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' },{ title: 'My Contract' }]



  const view = contracts.map(contract => {
    z++;
    return (
      <div key={z} className="my-contract">
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