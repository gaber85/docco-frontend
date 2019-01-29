import React from 'react';
import './MainButton.css';

const MainButton = (props) => {
  const {text, click} = props;
    return (
      <div role='button' tabIndex='0' className="main-button"
        onClick={click} onKeyPress={click}>
      {text}
      </div>
    );
}

export default MainButton;