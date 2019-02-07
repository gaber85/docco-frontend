import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContractPage.css';
import SearchBar from '../../components/SearchBar';
import TeamSection from '../../components/TeamSection';
import SideBar from '../../components/SideBar';
import { getOne, saveNegotiation } from '../../redux/actions';
import { negotiationSchema } from '../../redux/middlewares/schemas/schemas';
import EditorView from '../../components/EditorView/EditorView';

class ContractPage extends Component {

  constructor(props) {
    super(props);
    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount () {
    const { match, getOneAct } = this.props;
    const api = {
      route: `negotiations/${match.params.id}`,
      schema: negotiationSchema
    };
    getOneAct(api);
  }

  handleSaveContract = () => {
    const { saveContractAct, contract } = this.props;
    const testText = {content: "dummy Text", dealAgreed: false};
    const api = {
      route: `negotiations/publish/${contract.id}`,
      method: 'POST',
      body: JSON.stringify(testText)
    };
    saveContractAct(api);
  };

  toggleView() {
    const { contract } = this.props;
    this.props.history.push(`/diff/${contract.id}`); // eslint-disable-line
  }

  render () {

    const { details, contract, content } = this.props;

    return (
      <div className="main-container">
        <div className="team-section">
          <TeamSection yourDetails={ details && details.yours } theirDetails={ details && details.theirs } />
        </div>
        <div className="contract-display">
          <div className="container-top">
            <div className="title">Negotiation: { contract && contract.title }</div>
            <div className="search-bar-section"><SearchBar /></div>
          </div>
          <div className="contract">
            <EditorView content={ content } />
            <div className="sidebar-controls">
              <SideBar saveContract={this.handleSaveContract} toggleChanges={this.toggleView} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-line
  const contract = state.entities.negotiations[ownProps.match.params.id]; //  should be changed to ownProps.match.params.id
  if (contract) {
    const yourDetails = state.entities.parties[contract.yourDetails];
    const theirDetails = state.entities.parties[contract.theirDetails];
    const yourContent = state.entities.proposals[contract.yourContent];
    const theirContent = state.entities.proposals[contract.theirContent];

    const details = {
      yours: yourDetails,
      theirs: theirDetails,
    }
    let content = '';
    if (contract && contract.youEditedLast) {
      content = yourContent && yourContent.content || ''; // eslint-disable-line
    } else {
      content = theirContent && theirContent.content || ''; // eslint-disable-line
    }
    return {
      content,
      contract,
      details,
      yourContent,
      theirContent
    };
  }
  return {};
};

const mapDispatchToProps = dispatch => ({
  getOneAct: api => dispatch(getOne(api)),
  saveContractAct: api => dispatch(saveNegotiation(api))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractPage);
