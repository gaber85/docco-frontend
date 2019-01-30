import React, { Component } from 'react';
import './DragDrop.css';

class DragDrop extends Component {
  dropRef = React.createRef();

  constructor(props) {
  super(props);
  this.state = {
    dragging: false
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
    if (e.dataTransfer.items && e.dataTransfer.items.lenth > 0) {
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
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { children } = this.props;
    const { dragging } = this.state;
    return (
      <div className="drag-drop-container" ref={this.dropRef}>
      {dragging &&
        <div className="drag-drop-dash">
          <div className="drag-drop-inside">
            <div>Drop Here</div>
          </div>
        </div>
      }
        {children}
      </div>
    )
  }
}

export default DragDrop;