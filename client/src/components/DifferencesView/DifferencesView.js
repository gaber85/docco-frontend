import React, { Component } from 'react';
import './DifferencesView.css';

const Diff = require('diff');

class DifferencesView extends Component {

  getAdditionsByLine() {
    console.log(this.props.content);
    const { yourContent, theirContent } = this.props.content;
    const changes = Diff.diffTrimmedLines(yourContent, theirContent);
    const changedString = changes.map(change => {
      const diff = change.added ? 'added' : change.removed ? 'hidden' : 'stays';
      return <span id={diff}>{change.value}</span>;
    });
    return changedString;
  }

  getAdditionsByWord() {
    const { yourContent, theirContent } = this.props.content;
    const changes = Diff.diffWordsWithSpace(yourContent, theirContent);
    const changedString = changes.map(change => {
      const diff = change.added ? 'added' : change.removed ? 'hidden' : 'stays';
      return <span id={diff}>{change.value}</span>;
    });
    console.log('additions', changes.filter(change => change.added).length);
    console.log('deletions', changes.filter(change => change.removed).length);
    return changedString;
  }

  getSubtractionsByLine() {
    const { yourContent, theirContent } = this.props.content;
    const changes = Diff.diffTrimmedLines(yourContent, theirContent);
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
    const { yourContent, theirContent } = this.props.content;
    const changes = Diff.diffWordsWithSpace(yourContent, theirContent);
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
            <div className="diff left">{this.getAdditionsByWord()}</div>
            <div className="diff right">{this.getSubtractionsByWord()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DifferencesView;
