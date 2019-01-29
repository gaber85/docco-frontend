import React from 'react';

import './PlusButton.css';



const PlusButton = (props) => {

  const {click} = props;
  let {size} = props;

  if(!size) size=8;


  const myStyle = {
    width: `${size}vw`,
    height: `${size}vw`,
    fontSize: `${size}vw`,
    padding: `${size*0.1}vw`
  }

  return (
    <div className="plus-button" style={myStyle} tabIndex="0" role="button" onClick={click} onKeyPress={click}><i className="fas fa-plus" /></div>
  )

}

export default PlusButton;