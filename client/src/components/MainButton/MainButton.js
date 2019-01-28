import React from 'react';
import './MainButton.css';

const MainButton = (props) => {
  const {text} = props;
    return (
      <div className="main-button">
      {text}
      </div>
    );
}

export default MainButton;