import React from 'react';
import styled from '@emotion/styled';
import DragDrop from '../DragDrop';
import MainButton from '../MainButton';

const AddFiles = props => {
  const { handleProgress, handleFileContent } = props;
  const handleClick = () => handleProgress(2);
  const handleClickBack = () => handleProgress(0);

  return (
    <AddFileContainer>
      <Title>Add Documents</Title>
      <DragDrop handleFileContent={handleFileContent} />
      <BackAndNextButtons>
        <MainButton text="Back" width="175px" align="flex-start" click={handleClickBack} />
        <MainButton text="Next" width="175px" align="flex-start" click={handleClick} />
      </BackAndNextButtons>
    </AddFileContainer>
  );
};

const AddFileContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BackAndNextButtons = styled('div')`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  width: 80%;
  padding: 30px;
`;
const Title = styled('div')`
  font-size: 6vw;
  text-align: center;
  margin-bottom: 40px;
`;

export default AddFiles;
