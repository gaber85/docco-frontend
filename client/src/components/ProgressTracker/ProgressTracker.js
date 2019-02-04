import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = props => {
  const { progressTracker, handleProgress } = props;
  const handleClick = event =>
    handleProgress(Number(event.currentTarget.dataset.id));
  return (
    <div>
      <ul className="progress-tracker">
        <li
          className={progressTracker === 0 ? 'active' : undefined}
          data-id="0"
          onClick={handleClick}
        >
          <span className="progress-marker">1</span>
        </li>
        <li
          className={progressTracker === 1 ? 'active' : undefined}
          data-id="1"
          onClick={handleClick}
        >
          <span className="progress-marker">2</span>
        </li>
        <li
          className={progressTracker === 2 ? 'active' : undefined}
          data-id="2"
          onClick={handleClick}
        >
          <span className="progress-marker">3</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressTracker;
