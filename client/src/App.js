import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from './redux/actions'
import './App.css';
import DragDrop from './components/DragDrop';

// eslint-disable-next-line
class App extends Component {

  handleDrop = (data) => {
    const fileList = [];
    for (let i = 0; i < data.files.length; i+=1) {
      if (fileList.indexOf(data.files[i].name) === -1) fileList.push(data.files[i].name);
    }
    return fileList;
  }

  render () {
    return ( 
      <DragDrop handleDrop={this.handleDrop} />
    )
  }
}

const mapStateToProps = (state) => ({
  contracts: state.contracts
})

const mapDispatchToProps = (dispatch) => ({

  add: () => dispatch(add())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
