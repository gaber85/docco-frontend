import React, { Component } from 'react';
import './MainButton.css';

class MainButton extends Component {
  render() {
    return (
      <div className="main-button">
      {this.props.text}
      </div>
    );
  }
}

export default MainButton;