import React from 'react';
import EditorView from '../EditorView/EditorView';
import DifferencesView from '../DifferencesView/DifferencesView';

const Diff = require('diff');

const ContractBrancher = props => {
  const state = {
    content: null,
  };

  if (props.contract) {
    const { contract, yourContent, theirContent } = props;
    if (contract) {
      if (contract.youEditedLast) {
        state.content = theirContent.content;
      } else {
        state.content = yourContent.content;
      }
    }
    return <EditorView {...props} content={state.content}/>;
  }
  return <EditorView {...props} content="loading" />;
};

export default ContractBrancher;
