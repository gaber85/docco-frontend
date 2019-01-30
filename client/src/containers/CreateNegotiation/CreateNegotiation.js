import React, { Component } from 'react';
import './CreateNegotiation.css';
import TitleAndDescriptionPage from '../../components/TitleAndDescriptionPage';

export default class CreateNegotiation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressTracker: 0,
      document: {
        title: 'title...',
        description: 'description...',
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

  handleInputOnFocus = event => {
    const { document } = this.state;
    const { value, name } = event.target;
    if (value === `${name}...`) {
      this.setState({
        document: { ...document, [name]: '' }
      });
    }
  };

  handleInputOnBlur = event => {
    const { document } = this.state;
    const { name } = event.target;
    if (document[name] === '') {
      this.setState({
        document: { ...document, [name]: `${name}...` }
      });
    }
  };

  render() {
    const { progressTracker, document } = this.state;

    if (progressTracker === 0) {
      return (
        <div>
          <TitleAndDescriptionPage
            document={document}
            handleInputChange={this.handleInputChange}
            handleInputOnFocus={this.handleInputOnFocus}
            handleInputOnBlur={this.handleInputOnBlur}
          />
        </div>
      );
    }
    return <div>default</div>;
  }
}
