import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import './ContractPage.css';
import SearchBar from '../../components/SearchBar';
import TeamSection from '../../components/TeamSection';
import SideBar from '../../components/SideBar';
import { getOne } from '../../redux/actions';
import NavBar from '../../components/NavBar';
import { negotiationSchema } from '../../redux/middlewares/schemas/schemas';

import { gabeImg } from './gabe-image.jpg';
import ContractBrancher from '../../components/ContractBrancher/ContractBrancher';
// eslint-disable-next-line
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

  toggleView() {
    const { contract } = this.props;
    this.props.history.push(`/diff/${contract.id}`); // eslint-disable-line
  }

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
      <ContractContainer>
        <NavBar img={gabeImg} name="Gabe Riera" />
        <div className="main-container">
          <div className="team-section">
            <TeamSection
              yourDetails={this.yourDetails || 'No Party'}
              theirDetails={this.theirDetails || 'No Party'}
            />
          </div>
          <div className="contract-display">
            <div className="container-top">
              <ContractTitle>
                Apple Contract{this.contract && this.contract.title}
              </ContractTitle>
              <div className="search-bar-section">
                <SearchBar />
              </div>
            </div>
            <div className="contract">
              <ContractBrancher {...this.props} />
              <div className="sidebar-controls">
                <SideBar toggleChanges={this.toggleView} />
              </div>
            </div>
          </div>
        </div>
      </ContractContainer>
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

const ContractTitle = styled('div')`
  font-size: 30px;
  padding-bottom: 10px;
`;
const ContractContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const mapDispatchToProps = dispatch => ({
  getOneAct: api => dispatch(getOne(api))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractPage);
