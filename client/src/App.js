import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from './redux/actions'
import './App.css';
// import MainButton from './components/MainButton';
//  import SignUp from './components/SignUp';
// import NavBar from './components/NavBar';
// import AddMember from './components/AddMember';
// import ContractList from './components/ContractList';
// import contracts from './components/ContractList/contracts';
import Login from './components/Login'

// eslint-disable-next-line
class App extends Component {

  render () {

    return <Login />;
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
