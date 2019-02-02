import React from 'react';
import { connect } from 'react-redux';
import './ContractList.css';
// import {css,jsx} from '@emotion/core';

const ContractList = (props) => {

  console.log(props);

  const {contractList} = props;

  // renders each contract with font awesome symbol;
  const view = contractList.map((contract, index) => {
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

const mapStateToProps = (state) => ({
contractList: state.pages.contractList.result.map(id => state.entities.negotiations[id]),
page: state.pages.contractList

})

export default connect(
  mapStateToProps,
  null
)(ContractList);