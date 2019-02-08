import React from 'react';
import styled from '@emotion/styled';

const ProgressTracker = props => {
  const { progressTracker, handleProgress } = props;
  const handleClick = event =>
    handleProgress(Number(event.currentTarget.dataset.id));
  return (
    <ProgressTrackerContainer>
      <ProgressMarker
        active={progressTracker === 0 && true}
        data-id="0"
        onClick={handleClick}
      >
        1
      </ProgressMarker>
      <ProgressMarker
        active={progressTracker === 1 && true}
        data-id="1"
        onClick={handleClick}
      >
        2
      </ProgressMarker>
      <ProgressMarker
        active={progressTracker === 2 && true}
        data-id="2"
        onClick={handleClick}
      >
        3
      </ProgressMarker>
    </ProgressTrackerContainer>
  );
};

const ProgressTrackerContainer = styled('div')`
  font-size: 16px;
  color: #bdc3c7;
  display: flex;
  justify-content: flex-end;
`;
const ProgressMarker = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.active ? '#F1C40F' : 'white')};
  margin: 20px;
  width: ${props => (props.active ? '32px' : '30px')};
  height: ${props => (props.active ? '32px' : '30px')};
  color: ${props => (props.active ? '#2C3E50' : '#bdc3c7')};
  border: ${props => (props.active ? '1px solid #2C3E50' : '1px solid #bdc3c7')};
  box-shadow: 1px 1px 1px #bdc3c7;
  border-radius: 50%;
  cursor: pointer;
`;

export default ProgressTracker;
