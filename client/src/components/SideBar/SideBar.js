import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
  const { clickUp, clickDown, table } = props;
    return (
      <div className="side-bar">
        <i role='button' tabIndex='0' className="fas fa-list-ul icons" onClick={table} onKeyPress={table}/>
        <i role='button' tabIndex='-1' className="fas fa-arrow-up icons" onClick={clickUp} onKeyPress={clickUp} />
        <i role='button' tabIndex='-2' className="fas fa-arrow-down icons" onClick={clickDown} onKeyPress={clickDown}/>
      </div>
    );
}

export default SideBar;