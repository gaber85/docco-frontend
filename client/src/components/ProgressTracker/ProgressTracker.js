import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = props => {
  const { progressTracker } = props;

  return (
    <div>
      <ul className="progress-tracker">
        <li className={progress-status}>
          <span className="progress-marker"/>
        </li>


      </ul>
    </div>
  )
};


export default ProgressTracker
