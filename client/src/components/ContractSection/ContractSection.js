import React, { Component } from 'react';
import './ContractSection.css';

class ContractSection extends Component {
  render () {
    const { info } = this.props;
    const { yContent, tContent, contract } = info;

    let content = 'No Content'
    // the if logic is necessary because at (the dev stage I don't always pass a contract); can be removed in final
    if (info && yContent)
      if (contract.youEditedLast) { content = yContent.content }
      else { content = tContent.content };
    return (
      <div className="contract-container">
        <div className="content-body>">{content}</div>
      </div>
    )
  }
}

export default ContractSection;