import { connect } from 'react-redux';
import React, { Component } from 'react';
import './DifferencesView.css';
import { getOne } from '../../redux/actions';
import { negotiationSchema } from '../../redux/middlewares/schemas/schemas';

const Diff = require('diff');

class DifferencesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      additions: 0,
      deletions: 0,
    }
  }

  componentDidMount () {
    const { match, getOneAct } = this.props;
    const api = {
      route: `negotiations/${match.params.id}`,
      schema: negotiationSchema
    }
    getOneAct(api);
  }

  getChanges(options) {
    const { yourContent, theirContent } = this.props;
    const { diffingMode, additions } = options;
    const changes = Diff[diffingMode](yourContent && yourContent.content || '', theirContent && theirContent.content || '');
    let diff;
    const content = changes.map(change => {
      if (additions) {
        diff = change.added ? 'added' : change.removed ? 'hidden' : 'stays';
      } else {
        diff = change.added ? 'hidden' : change.removed ? 'removed' : 'stays';
      }
      return <span id={diff}>{change.value}</span>;
    });
    const additionCount = changes.filter(change => change.added).length;
    const deletionCount = changes.filter(change => change.removed).length;
    return { content, additionCount, deletionCount };
  }

  render() {
    if (this.props.contract) {
      const deletionsByWord = this.getChanges({additions: false, diffingMode: 'diffWordsWithSpace'});
      const deletionsByLine = this.getChanges({additions: false, diffingMode: 'diffTrimmedLines'});
      const additionsByWord = this.getChanges({additions: true, diffingMode: 'diffWordsWithSpace'});
      const additionsByLine = this.getChanges({additions: true, diffingMode: 'diffTrimmedLines'});


    return (
      <div className="container">
        <div className="bar">
          <div id="contractInfo">
            <i className="fas fa-arrow-left" id="backIcon"/> { this.props.title || "Agreement on Doccos development team execution method"}
          </div>
          <div className="title">
            <div id="yours">{additionsByWord.additionCount} Deletions</div>
            <div id="theirs">{deletionsByWord.deletionCount} Additions</div>
          </div>
        </div>
        <div>
          <div className="differences hidden-content">
            <div className="diff left hidden-content">
            {additionsByLine.content}
            </div>
            <div className="diff right hidden-content">
            {deletionsByLine.content}
            </div>
          </div>
          <div className="differences visible">
            {<div className="diff left">{additionsByWord.content}</div>}
            {<div className="diff right">{deletionsByWord.content}</div>}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>LOADING</div>
    )
  }
}
}

const mapStateToProps = (state, ownProps) => { // eslint-disable-line

  const contract = state.entities.negotiations[ownProps.match.params.id]; //  should be changed to ownProps.match.params.id
  let yourContent = {
    content: '',
  };
  let theirContent = {
    content: '',
  };

  if (contract) {
    yourContent = state.entities.proposals[contract.yourContent];
    theirContent = state.entities.proposals[contract.theirContent];
    return {
      contract,
      yourContent,
      theirContent
    }
  }
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getOneAct: (api) => dispatch(getOne(api))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DifferencesView);
