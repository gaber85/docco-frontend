import React from 'react';
// import PropTypes from 'prop-types';
import './PlusButton.css';

const PlusButton = ({click, size = 8}) => {

  // makes sure size button is reusable by making size adaptive to view width;
  const myStyle = {
    width: `${size}vw`,
    height: `${size}vw`,
    fontSize: `${size}vw`,
    padding: `${size*0.1}vw`
  }

  // PlusButton.propTypes = {
  //   size : PropTypes.number,
  //   click : PropTypes.func
  // }


  return (
    <div className="plus-button" style={myStyle} tabIndex="0" role="button" onClick={click} onKeyPress={click}><i className="fas fa-plus" /></div>
  )


}

export default PlusButton;
