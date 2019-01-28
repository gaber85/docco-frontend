import React from 'react';
import './MainButton.css';

<<<<<<< HEAD
const MainButton = (props) => {
  const {text} = props;
    return (
      <div className="main-button">
      {text}
=======
class MainButton extends Component {

  render () {
    return (
      <div className="main-button">
        {this.props.text}
>>>>>>> feat: signup v0
      </div>
    );
}

export default MainButton;