import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { getAll, getUser } from './redux/actions';

import './App.css';

// import MainButton from './components/MainButton';
// import NavBar from './components/NavBar';
// import AddMember from './components/AddMember';
import ContractList from './components/ContractList';
// import contracts from './components/ContractList/contracts';
<<<<<<< HEAD
import Login from './components/Login';
// import CreateNegotiation from './containers/CreateNegotiation/CreateNegotiation';
// import ContractPage from './containers/ContractPage/ContractPage';
import Dashboard from './containers/Dashboard';
import ContractPage from './containers/ContractPage/ContractPage';
=======

import Login from './components/Login';
import CreateNegotiation from './containers/CreateNegotiation';
import ContractPage from './containers/ContractPage';
import LandingPage from './containers/LandingPage';
import Dashboard from './containers/Dashboard';
import SignUp from './components/SignUp';
>>>>>>> develop

// eslint-disable-next-line
class App extends React.Component {
  componentDidMount() {
    this.checkLocal();
    const { getAllAct } = this.props;
    getAllAct();
  }

  checkLocal = () => {
    const { getUserAct } = this.props;
    const authToken = localStorage.getItem('token');
    if (authToken) getUserAct();
  };

  isLoggedIn = () => {
    const authToken = localStorage.getItem('token');
    return authToken;
  };

  PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          this.isLoggedIn() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  };

  render() {
    const { PrivateRoute } = this;
    return (
<<<<<<< HEAD
      <div>
        <Login />
        <Dashboard />
      </div>
=======
      <Router>
        <div className="main-app-container">
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create-new" component={CreateNegotiation} />
          <PrivateRoute path="/contract/:id" component={ContractPage} />
          <PrivateRoute path="/contractid" component={ContractPage} />
        </div>
      </Router>
>>>>>>> develop
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
