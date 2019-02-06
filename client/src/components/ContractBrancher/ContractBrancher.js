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

    if (Diff.diffChars(yourContent.content, theirContent.content).length) {
      return <DifferencesView content={{yourContent: props.yourContent.content, theirContent: props.theirContent.content}} />;
    };
    return <EditorView {...props} content="component B"/>;
  }
  return <EditorView {...props} content="loading"/>;
};

export default ContractBrancher;
