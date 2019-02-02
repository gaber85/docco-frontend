import React, { Component } from 'react';
import './CreateNegotiation.css';
import TitleAndDescriptionPage from '../../components/TitleAndDescriptionPage';
import ProgressTracker from '../../components/ProgressTracker';
import AddParties from '../../components/AddPartiesPage';
import AddFiles from '../../components/AddFiles';

export default class CreateNegotiation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressTracker: 0,
      document: {
        title: '',
        description: '',
        files: [],
        // Todo: email party a is hardcoded for now, change that
        party_a_email: 'hans@butt-insurance.com',
        party_b_email: ''
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
    console.log(
      'create Negotiation',
      document.title,
      document.description,
      document.party_b_email,
      document.files
    );
  };

  handleFileContent = content => {
    console.log('content', content);
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
      <div>
        <StepsTracker />
        {content}
      </div>
    );
  }
}
