import React, { Component } from 'react';
import './DragDrop.css';

class DragDrop extends Component {
  dropRef = React.createRef();

  constructor(props) {
  super(props);
  this.state = {
    dragging: false,
    allFiles: [],
  }
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
  
  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter += 1;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({dragging: true});
    }
  };

  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter -= 1;
    if (this.dragCounter > 0) return;
    this.setState({dragging: false});
  };

  handleDrop = (e) => {
    const { handleDrop } = this.props;
    const { allFiles } = this.state;
    e.preventDefault();
    e.stopPropagation();
    this.setState({dragging: false});    
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      const files = handleDrop(e.dataTransfer, allFiles);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
      this.setState({allFiles: files})
    }
  };

  render() {
    const { children } = this.props;
    const { dragging, allFiles } = this.state;
    return (
      <div className="container">
      <div className="drag-drop-container" ref={this.dropRef}>
        {dragging &&
          <div className="drag-drop-dash">
            <div className="drag-drop-inside">
              <div>Drop Here</div>
            </div>
          </div>
        }
        Drag and Drop Files
        {children}
      </div>
          {allFiles.map((file) => {
            return (<div><i className="far fa-file" /> {file}</div>)
          })}
      </div>
    )
  }
}

export default DragDrop
