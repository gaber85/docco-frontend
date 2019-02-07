import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
  const { clickUp, clickDown, table, toggleChanges, saveContract } = props;
    return (
      <div className="side-bar">
        <div className="tooltip">
        <i role='button' tabIndex='-1' className="fas fa-list-ul icons" onClick={table} onKeyPress={table}/>
        <span className="tooltiptext">Table of Content</span>
        </div>
        <div className="tooltip">
        <i role='button' tabIndex='-1' className="fas fa-arrow-up icons" onClick={clickUp} onKeyPress={clickUp} />
        <span className="tooltiptext">Previous</span>
        </div>
        <div className="tooltip">
        <i role='button' tabIndex='-1' className="fas fa-arrow-down icons" onClick={clickDown} onKeyPress={clickDown}/>
        <span className="tooltiptext">Next</span>
        </div>
        <div className="tooltip">
        <i role='button' tabIndex='-1' className="far fa-copy icons" onClick={toggleChanges} onKeyPress={toggleChanges}/>
        <span className="tooltiptext">View Changes</span>
        </div>
        <div className="tooltip">
        <i role='button' tabIndex='-1' className="far fa-save icons" onClick={saveContract} onKeyPress={saveContract}/>
        <span className="tooltiptext">Save Changes</span>
        </div>
      </div>
    );
};

export default SideBar;
