import { connect } from 'react-redux';
import React, { Component } from 'react';
import './DifferencesView.css';
import { getOne } from '../../redux/actions';
import { negotiationSchema } from '../../redux/middlewares/schemas/schemas';

const Diff = require('diff');

class DifferencesView extends Component {

  componentDidMount () {
    // will be written out of this.props.match.params
    const content = {}; // eslint-disable-line
    const { match } = this.props;
    const { getOneAct } = this.props;
    const api = {
      route: `negotiations/${match.params.id}`,
      schema: negotiationSchema
    }

    const { contract, yourContent, theirContent, yourDetails, theirDetails } = this.props; // eslint-disable-line
    if (contract && yourContent && theirContent) {
      const content = { yourContent: yourContent.content, theirContent: theirContent.content }
    }
  }

  getAdditionsByLine() {
    const { yourContent, theirContent } = this.props;
    const changes = Diff.diffTrimmedLines(yourContent.content, theirContent.content);
    const changedString = changes.map(change => {
      const diff = change.added ? 'added' : change.removed ? 'hidden' : 'stays';
      return <span id={diff}>{change.value}</span>;
    });
    return changedString;
  }

  getAdditionsByWord() {
    const { yourContent, theirContent } = this.props;
    const changes = Diff.diffWordsWithSpace(yourContent.content, theirContent.content);
    const changedString = changes.map(change => {
      const diff = change.added ? 'added' : change.removed ? 'hidden' : 'stays';
      return <span id={diff}>{change.value}</span>;
    });

    console.log('additions', changes.filter(change => change.added).length);
    console.log('deletions', changes.filter(change => change.removed).length);
    return changedString;
  }

  getSubtractionsByLine() {
    const { content } = this.props;
    const { yourContent, theirContent } = this.props;
    const changes = Diff.diffTrimmedLines(yourContent.content, theirContent.content);
    const changedString = changes.map(change => {
      const diff = change.added
        ? 'hidden'
        : change.removed
        ? 'removed'
        : 'stays';
      return <span id={diff}>{change.value}</span>;
    });
    return changedString;
  }

  getSubtractionsByWord() {
    const { content } = this.props;
    const { yourContent, theirContent } = this.props;
    const changes = Diff.diffWordsWithSpace(yourContent.content, theirContent.content);
    const changedString = changes.map(change => {
      const diff = change.added
        ? 'hidden'
        : change.removed
        ? 'removed'
        : 'stays';
      return <span id={diff}>{change.value}</span>;
    });
    return changedString;
  }

  render() {
    return (
      <div className="container">
        <div className="bar">
          <div id="contractInfo">
            Agreement on Doccos development team execution method
          </div>
          <div className="title">
            <div id="yours">Before</div>
            <div id="theirs">After</div>
          </div>
        </div>
        <div>
          <div className="differences hidden-content">
            <div className="diff left hidden-content">
              {this.getAdditionsByLine()}
            </div>
            <div className="diff right hidden-content">
            {this.getSubtractionsByLine()}
            </div>
          </div>
          <div className="differences visible">
            {<div className="diff left">{this.getAdditionsByWord()}</div>}
            {<div className="diff right">{this.getSubtractionsByWord()}</div>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => { // eslint-disable-line

  const contract = state.entities.negotiations[68]; //  should be changed to ownProps.match.params.id
  if (contract) {
    const yourContent = state.entities.proposals[contract.yourContent];
    const theirContent = state.entities.proposals[contract.theirContent];
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
