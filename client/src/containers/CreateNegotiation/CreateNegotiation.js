import React, { Component } from 'react';
import './CreateNegotiation.css';
import TitleAndDescriptionPage from '../../components/TitleAndDescriptionPage';

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

  render() {
    const { progressTracker, document } = this.state;

    if (progressTracker === 0) {
      return (
        <div>
          <TitleAndDescriptionPage
            document={document}
            handleInputChange={this.handleInputChange}
          />
        </div>
      );
    }
    return <div>default</div>;
    //
    // return (
    //   <div>
    //     <progressBar />
    //     {getTheRightThing(progressTracker)}
    //   </div>
    // )
  }
}
