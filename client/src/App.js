import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { getAll, getUser } from './redux/actions';

import './App.css';

import Login from './components/Login';
import CreateNegotiation from './containers/CreateNegotiation';
import ContractPage from './containers/ContractPage';
import LandingPage from './containers/LandingPage';
import Dashboard from './containers/Dashboard';
import SignUp from './components/SignUp';
import DifferencesView from './components/DifferencesView/DifferencesView';
// eslint-disable-next-line
class App extends React.Component {
  componentDidMount() {
    this.checkLocal();
  }

  checkLocal = () => {
    const { getUserAct, authentication } = this.props;
    const authToken = authentication.token;
    if (authToken) getUserAct();
  };

  isLoggedIn = () => {
    const { authentication } = this.props;
    const authToken = authentication.token;
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
      <Router>
        <div className="main-app-container">
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create-new" component={CreateNegotiation} />
          <PrivateRoute path="/contract/:id" component={ContractPage} />
          <PrivateRoute path="/contractid" component={ContractPage} />
          <PrivateRoute path="/diff/:id" component={DifferencesView} />
        </div>
      </Router>
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
