import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
  const { clickUp, clickDown, table, toggleChanges, saveContract } = props;
    return (
      <div className="side-bar">
        <i role='button' tabIndex='-1' className="fas fa-list-ul icons" onClick={table} onKeyPress={table}/>
        <i role='button' tabIndex='-1' className="fas fa-arrow-up icons" onClick={clickUp} onKeyPress={clickUp} />
        <i role='button' tabIndex='-1' className="fas fa-arrow-down icons" onClick={clickDown} onKeyPress={clickDown}/>
        <i role='button' tabIndex='-1' className="far fa-copy icons" onClick={toggleChanges} onKeyPress={toggleChanges}/>
        <i role='button' tabIndex='-1' className="far fa-save icons" onClick={saveContract} onKeyPress={saveContract}/>
      </div>
    );
};

export default SideBar;
