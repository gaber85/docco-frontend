import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContractPage.css';
import SearchBar from '../../components/SearchBar'
import TeamSection from '../../components/TeamSection';
import ContractSection from '../../components/ContractSection';
import SideBar from '../../components/SideBar';
import { getOne } from '../../redux/actions';
import negotiationsSchema from '../../redux/middlewares/schemas/schemas';

// eslint-disable-next-line
class ContractPage extends Component {

  componentDidMount () {
    // will be written out of this.props.match.params
    const id = 16;
    const { getOneAct } = this.props;
    const api = {
      route: `negotiations/${id}`,
      schema: negotiationsSchema
    }
    getOneAct(api);
  }

  render () {

    const { contract } = this.props;
    let info = {};
    if (contract) {
      const { yourDetails, theirDetails, yourContent, theirContent } = contract;
      const yDetails = this.props.parties[yourDetails];
      const tDetails = this.props.parties[theirDetails];
      const yContent = this.props.proposals[yourContent];
      const tContent = this.props.proposals[theirContent];
      info = {
        contract,
        yDetails,
        tDetails,
        yContent,
        tContent
      }
    }

    return (
      <div className="main-container">
        <div className="team-section">
          <TeamSection info={info} />
        </div>
        <div className="contract-display">
          <div className="container-top">
            <div className="title">Apple Contract</div>
            <div className="search-bar-section"><SearchBar /></div>
          </div>
          <div className="contract">
            <ContractSection info={info} />
            <div className="sidebar-controls">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  contract: state.entities.negotiations[16],//  should be changed to ownProps.match.params.id
  parties: state.entities.parties,
  proposals: state.entities.proposals,
  page: state.pages.contractPage
})

const mapDispatchToProps = (dispatch) => ({
  getOneAct: (x) => dispatch(getOne(x))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractPage);