import React from 'react';
import { connect } from 'react-redux';
import './ContractList.css';
// import {css,jsx} from '@emotion/core';

export const ContractList = (props) => {
  const {contractList} = props;
  // renders each contract with font awesome symbol;
  const view = contractList.map((contract) => {
    return (
      <div key={contract.id} className="my-contract">
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

// this can be moved to the parent Container ones the structure is passed and the contracts passed as props.contractList; the pages entry can be accordingly changed to name of parent container;
const mapStateToProps = (state) => ({
contractList: state.pages.contractList.result.map(id => state.entities.negotiations[id]),
page: state.pages.contractList // this can be changed from contractList to parent-container name
})

export default connect(
  mapStateToProps,
  null
)(ContractList);