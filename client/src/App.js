import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getAll, getUser } from './redux/actions';

import './App.css';

// import MainButton from './components/MainButton';
//  import SignUp from './components/SignUp';
// import NavBar from './components/NavBar';
// import AddMember from './components/AddMember';
// import ContractList from './components/ContractList';
// import contracts from './components/ContractList/contracts';
// import Login from './components/Login';
// import CreateNegotiation from './containers/CreateNegotiation/CreateNegotiation';
// import ContractPage from './containers/ContractPage/ContractPage';
import Dashboard from './containers/Dashboard';

// eslint-disable-next-line
class App extends Component {
  componentDidMount() {
    this.checkLocal();

    const { getAllAct } =this.props;

    getAllAct();
  }

  checkLocal = () => {
    const { getUserAct } = this.props;
    const authToken = localStorage.getItem('token');
    if (authToken) getUserAct();
  };

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entities: state.entities,
  authentication: state.authentication
});

const mapDispatchToProps = dispatch => ({
  getAllAct: () => dispatch(getAll()),
  getUserAct: () => dispatch(getUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
