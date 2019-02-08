import React, { Component } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

class DragDrop extends Component {
  dropRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      allFiles: []
    };
  }

  componentDidMount() {
    this.dragCounter = 0;
    const div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }

  componentWillUnmount() {
    const div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }

  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter += 1;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };

  handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter -= 1;
    if (this.dragCounter > 0) return;
    this.setState({ dragging: false });
  };

  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    const { handleFileContent } = this.props;
    const { allFiles } = this.state;
    const { files } = e.dataTransfer;
    const fileList = [];

    this.setState({ dragging: false });

    if (files.length > 0) {
      for (let i = 0; i < files.length; i += 1) {
        // read out content and pass back to handleDroppedFiles in AddFiles.js
        // Todo: condition for file type - should only read txt (string) files for now.
        const reader = new FileReader();
        // pass file content all the way to CreateNegotiation.js/handleFileContent
        reader.onload = () => handleFileContent(reader.result);
        reader.readAsText(files[i]);

        if (fileList.indexOf(files[i].name) === -1) {
          fileList.push(files[i].name);
        }
      }
    }
    e.dataTransfer.clearData();
    this.dragCounter = 0;
    this.setState({ allFiles: [...allFiles, fileList] });
  };

  render() {
    const { children } = this.props;
    const { dragging, allFiles } = this.state;
    return (
      <DragDropMain>
        <DragDropContainer ref={this.dropRef}>
          {dragging && (
            <DragDropDash>
              <DragDropInside>
                <div>Drop Here</div>
              </DragDropInside>
            </DragDropDash>
          )}
          Drag and Drop Files
          {children}
        </DragDropContainer>
        <DroppedFiles>
          {allFiles.map(file => {
            return (
              <EachFile key={file}>
                <i
                  css={css`
                    padding-right: 5px;
                  `}
                  className="far fa-file"
                />
                {file}
              </EachFile>
            );
          })}
        </DroppedFiles>
      </DragDropMain>
    );
  }
}

const DragDropMain = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`;
const DroppedFiles = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f1;
`;
const EachFile = styled('div')`
  background-color: #ecf0f1;
  font-size: 18px;
  padding: 10px;
`;
const DragDropContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ecf0f1;
  color: #bdc3c7;
  font-size: 5vw;
  width: 75%;
  height: 30vh;
`;
const DragDropDash = styled('div')`
  border: dashed #bdc3c7 4px;
  background-color: #ecf0f1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
const DragDropInside = styled('div')`
  position: absolute;
  top: 35%;
  right: 0;
  left: 0;
  text-align: center;
  color: #bdc3c7;
  font-size: 5vw;
`;

export default DragDrop;
