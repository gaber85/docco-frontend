import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import './CreateNegotiation.css';
import TitleAndDescriptionPage from '../../components/TitleAndDescriptionPage';
import ProgressTracker from '../../components/ProgressTracker';
import AddParties from '../../components/AddPartiesPage';
import AddFiles from '../../components/AddFiles';
import {negotiationSchema} from '../../redux/middlewares/schemas/schemas';
import {postNeg} from '../../redux/actions'


export class CreateNegotiation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressTracker: 0,
      document: {
        title: '',
        description: '',
        files: [],
        partyBEmail: ''
      }
    };

  }

  handleInputChange = event => {
    const { document } = this.state;
    const { name, value } = event.target;
    this.setState({
      document: { ...document, [name]: value }
    });
  };

  handleProgress = value => {
    this.setState({ progressTracker: value });
  };

  handleCreateNegotiation = () => {
    const { document } = this.state;
    const { postIt } = this.props;
    const newNeg = {
      title: document.title,
      description: document.description,
      partyBEmail: document.partyBEmail,
      content: document.files[0],
    };
    const api = {
      route: 'negotiations',
      schema: negotiationSchema,
      method: 'POST',
      body: JSON.stringify(newNeg),
    }
    postIt(api);
  };

  handleFileContent = content => {
    const { document } = this.state;
    this.setState({ document: { ...document, files: [...document.files, content] }});
  };

  render() {
    const { progressTracker, document } = this.state;
    const StepsTracker = () => (
      <ProgressTracker
        progressTracker={progressTracker}
        handleProgress={this.handleProgress}
      />
    );
    let content;
    switch (progressTracker) {
      case 0:
        content = (
          <TitleAndDescriptionPage
            document={document}
            handleInputChange={this.handleInputChange}
            handleProgress={this.handleProgress}
          />
        );
        break;
      case 1:
        content = (
          <AddFiles
            handleProgress={this.handleProgress}
            handleFileContent={this.handleFileContent}
          />
        );
        break;
      case 2:
        content = (
          <AddParties
            document={document}
            handleProgress={this.handleProgress}
            handleInputChange={this.handleInputChange}
            handleCreateNegotiation={this.handleCreateNegotiation}
          />
        );
        break;
      default:
        break;
    }
    return (
      <CreateNegotiationContainer>
        <StepsTracker />
        {content}
      </CreateNegotiationContainer>
    );
  }
}

const CreateNegotiationContainer = styled('div')`
background-image: linear-gradient(to left top,#3498db,rgb(174, 217, 247));
background-repeat: no-repeat;
height: 100%;
display: flex;
flex-direction: column;
`

const mapDispatchToProps = (dispatch) => ({
  postIt: (api) => dispatch(postNeg(api))
})

export default connect(
  null,
  mapDispatchToProps
)(CreateNegotiation)
