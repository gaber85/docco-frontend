import React from 'react';
import DragDrop from '../DragDrop';
import MainButton from '../MainButton';
import './AddFiles.css';

const AddFiles = props => {
  const { handleProgress, handleFileContent } = props;
  const handleClick = () => handleProgress(2);

  return (
    <div className="box">
      <DragDrop handleFileContent={handleFileContent} />
      <MainButton text="next" click={handleClick} />
    </div>
  );
};

export default AddFiles;
