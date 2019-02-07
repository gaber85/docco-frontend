import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContractPage.css';
import SearchBar from '../../components/SearchBar';
import TeamSection from '../../components/TeamSection';
import EditorView from '../../components/EditorView';
import SideBar from '../../components/SideBar';
import { getOne, saveNegotiation } from '../../redux/actions';
import { negotiationSchema } from '../../redux/middlewares/schemas/schemas';
import ContractBrancher from '../../components/ContractBrancher/ContractBrancher';
// eslint-disable-next-line
class ContractPage extends Component {
  componentDidMount() {
    // will be written out of this.props.match.params
    const content = {}; // eslint-disable-line
    const { match } = this.props;
    const { getOneAct } = this.props;
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

  render() {
    const {
      contract,
      yourContent,
      theirContent,
      yourDetails,
      theirDetails
    } = this.props; // eslint-disable-line

    if (contract && (yourContent || theirContent)) {
      if (contract.youEditedLast) {
        this.content = yourContent.content;
      } else {
        this.content = theirContent.content;
      }
    }

    return (
      <div className="main-container">
        <div className="team-section">
          <TeamSection
            yourDetails={this.yourDetails || 'No Party'}
            theirDetails={this.theirDetails || 'No Party'}
          />
        </div>
        <div className="contract-display">
          <div className="container-top">
            <div className="title">
              Apple Contract{this.contract && this.contract.title}
            </div>
            <div className="search-bar-section">
              <SearchBar />
            </div>
          </div>
          <div className="contract">
            <ContractBrancher {...this.props} />
            <div className="sidebar-controls">
              <SideBar saveContract={this.handleSaveContract} />
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
    return {
      contract,
      yourDetails,
      theirDetails,
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
