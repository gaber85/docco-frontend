import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from './redux/actions'
import './App.css';
// import MainButton from './components/MainButton';
//  import SignUp from './components/SignUp';
// import NavBar from './components/NavBar';
import ContractList from './components/ContractList';
import contracts from './components/ContractList/contracts';

// eslint-disable-next-line
class App extends Component {

  render () {

    return <ContractList contracts = {contracts} />;
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
