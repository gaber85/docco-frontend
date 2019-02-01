import React, { Component } from 'react';
import './CreateNegotiation.css';
import TitleAndDescriptionPage from '../../components/TitleAndDescriptionPage';
import DragDrop from '../../components/DragDrop';
import ProgressTracker from '../../components/ProgressTracker';
import AddParties from '../../components/AddPartiesPage';

export default class CreateNegotiation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressTracker: 0,
      document: {
        title: '',
        description: '',
        files: [],
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

  // add the dragged and dropped files to state
  handleDrop = data => {
    const fileList = [];
    for (let i = 0; i < data.files.length; i += 1) {
      if (fileList.indexOf(data.files[i].name) === -1)
        fileList.push(data.files[i].name);
    }
    console.log(fileList)
    return fileList;

    // this.setState({
    //   document: { ...document, files: fileList }
    // });
  };

  handleProgress = value => {
    console.log('ProgressTracker: ', value);
    this.setState({ progressTracker: value });
  };

  handleCreateNegotiation = () => {
    const { document } = this.state;
    console.log('create Negotiation', document.title,
      document.description, document.party_b_email);
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
          <DragDrop
            handleDrop={this.handleDrop}
            handleProgress={this.handleProgress}
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
