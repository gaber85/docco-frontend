import React, { Component } from 'react';
import './App.css';
// import MainButton from './components/MainButton';
// import SignUp from './components/SignUp';
// import NavBar from './components/NavBar';

import CreateNegotiation from './containers/CreateNegotiation';

// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <CreateNegotiation />
    );
  }
}

export default App;
