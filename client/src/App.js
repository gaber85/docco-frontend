import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from './redux/actions';
import './App.css';
import CreateNegotiation from './containers/CreateNegotiation';

// eslint-disable-next-line
class App extends Component {
  render() {
    return <CreateNegotiation />;
  }
}

const mapStateToProps = state => ({
  contracts: state.contracts
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(add())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
