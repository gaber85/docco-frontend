import React, { Component } from 'react';
import './App.css';
import MainButton from './components/MainButton';
import NavBar from './components/NavBar';

class App extends Component {
  // Main App Component
  render() {
    return <NavBar name={"Gabe Riera"} />;
  }
}

export default App;
