import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContractPage.css';
import SearchBar from '../../components/SearchBar'
import TeamSection from '../../components/TeamSection';
import ContractSection from '../../components/ContractSection';
import SideBar from '../../components/SideBar';
import { getOne } from '../../redux/actions';
import {negotiationSchema}from '../../redux/middlewares/schemas/schemas';

// eslint-disable-next-line
class ContractPage extends Component {

  componentDidMount () {
    // will be written out of this.props.match.params
    const id = 16;
    const { getOneAct } = this.props;
    const api = {
      route: `negotiations/${id}`,
      schema: negotiationSchema
    }
    getOneAct(api);
  }

  render () {

    const { contract } = this.props;
    console.log(this.props)
    let content = '';
    const {yourDetails, theirDetails} = contract || {};
    if (contract) {
      if (contract.youEditedLast) content = this.props.yourContent.content;
      else content = this.props.theirContent.content;
      }


    return (
      <div className="main-container">
        <div className="team-section">
          <TeamSection yourDetails={yourDetails || 'No Party'} theirDetails={theirDetails || 'No Party'} />
        </div>
        <div className="contract-display">
          <div className="container-top">
            <div className="title">Apple Contract</div>
            <div className="search-bar-section"><SearchBar /></div>
          </div>
          <div className="contract">
            <ContractSection content={content} />
            <div className="sidebar-controls">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// const mapStateToProps = (state, ownProps) => ({
//   contract: state.entities.negotiations[16],//  should be changed to ownProps.match.params.id
//   parties: state.entities.parties,
//   proposals: state.entities.proposals,
//   page: state.pages.contractPage
// })

const mapStateToProps = (state, ownProps) => { // eslint-disable-line

  const contract = state.entities.negotiations[16]; //  should be changed to ownProps.match.params.id
  if(contract) {
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
  }
}
return null;
}

const mapDispatchToProps = (dispatch) => ({
  getOneAct: (x) => dispatch(getOne(x))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractPage);