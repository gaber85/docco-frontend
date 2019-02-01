import React from 'react';
import DragDrop from '../DragDrop';
import MainButton from "../MainButton";
import './AddFiles.css';

const AddFiles = props => {
  const { document, handleProgress } = props;

  const handleClick = () => handleProgress(2);
  // add the dragged and dropped files to state
  const handleDrop = data => {
    const fileList = [];
    for (let i = 0; i < data.files.length; i += 1) {
      if (fileList.indexOf(data.files[i].name) === -1)
        fileList.push(data.files[i].name);
    }
    console.log(fileList);
    return fileList;
  };

  return (
    <div className='box'>
      <DragDrop handleDrop={handleDrop} />
      <MainButton text="next" click={handleClick} />
    </div>
  );
};

export default AddFiles;
