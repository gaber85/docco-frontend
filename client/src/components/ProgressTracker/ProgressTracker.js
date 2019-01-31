import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = props => {
  const { progressTracker } = props;
  return (
    <div>
      <ul className="progress-tracker">
        <li className={progressTracker === 0 ? "active" : undefined}>
          <span className="progress-marker">1</span>
        </li>
        <li className={progressTracker === 1 ?  "active" : undefined}>
          <span className="progress-marker">2</span>
        </li>
        <li className={progressTracker === 2 ? "active" : undefined}>
          <span className="progress-marker">3</span>
        </li>
      </ul>
    </div>
  );
};


export default ProgressTracker
