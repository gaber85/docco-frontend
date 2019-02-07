import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ContractPage.css';
import SearchBar from '../../components/SearchBar'
import TeamSection from '../../components/TeamSection';
import EditorView from '../../components/EditorView';
import SideBar from '../../components/SideBar';
import { getOne } from '../../redux/actions';
import { negotiationSchema } from '../../redux/middlewares/schemas/schemas';
// eslint-disable-next-line
class ContractPage extends Component {

  constructor(props) {
    super(props);
    this.toggleView = this.toggleView.bind(this);
  }

  componentDidMount () {
    // will be written out of this.props.match.params
    const { match } = this.props;
    const { getOneAct } = this.props;
    const api = {
      route: `negotiations/${match.params.id}`,
      schema: negotiationSchema
    }
    getOneAct(api);
  }

  toggleView() {
    const { match } = this.props;
    this.props.history.push(`/diff/${68}`);
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
              <SideBar toggleChanges={this.toggleView}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => { // eslint-disable-line

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
      content = yourContent.content; // eslint-disable-line
    } else {
      content = theirContent.content; // eslint-disable-line
    }
    return {
      content,
      contract,
      details,
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
)(ContractPage);
