import React, { Component } from 'react';
import './CreateNegotiation.css';
import TitleAndDescriptionPage from '../../components/TitleAndDescriptionPage';
import DragDrop from '../../components/DragDrop';
import ProgressTracker from '../../components/ProgressTracker';


export default class CreateNegotiation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressTracker: 0,
      document: {
        title: '',
        description: '',
        files: [],
        beneficiaryEmail: ''
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

  handleDrop = data => {
    const fileList = [];
    for (let i = 0; i < data.files.length; i += 1) {
      if (fileList.indexOf(data.files[i].name) === -1)
        fileList.push(data.files[i].name);
    }
    return fileList;
  };

  handleProgress = value => {
    this.setState({progressTracker: value})
  };

  render() {
    const { progressTracker, document } = this.state;
    switch (progressTracker) {
      case 0:
        return (
          <div>
            <ProgressTracker progressTracker={progressTracker} />
            <TitleAndDescriptionPage
              document={document}
              handleInputChange={this.handleInputChange}
              handleProgress={this.handleProgress}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <ProgressTracker progressTracker={progressTracker}/>
            <DragDrop handleDrop={this.handleDrop} handleProgress={this.handleProgress}/>
          </div>
        );
      default:
        return <div>default</div>;
    }
  }
}

// <DragDrop handleDrop={this.handleDrop} />

//
// return (
//   <div>
//     <progressBar />
//     {getTheRightThing(progressTracker)}
//   </div>
// )
