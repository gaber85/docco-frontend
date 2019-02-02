import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, login, token } from './redux/actions';

import './App.css';
// import MainButton from './components/MainButton';
//  import SignUp from './components/SignUp';
// import NavBar from './components/NavBar';
// import AddMember from './components/AddMember';
import ContractList from './components/ContractList';
// import contracts from './components/ContractList/contracts';
import Login from './components/Login'

// eslint-disable-next-line
class App extends Component {


  componentDidMount () {

  }

  checkLocal = () => {
    const { tokenAction } = this.props;
    const authToken = localStorage.getItem('token');
    if (authToken) tokenAction(authToken);
  }

  render () {





    return (
      <div>
        <ContractList />
        <Login />
      </div>);
  }
}

const mapStateToProps = (state) => ({
  entities: state.entities,
  authToken: state.authToken
})

const mapDispatchToProps = (dispatch) => ({

  add: () => dispatch(add()),
  login: (obj) => dispatch(login(obj)),
  tokenAction: (str) => dispatch(token(str))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
