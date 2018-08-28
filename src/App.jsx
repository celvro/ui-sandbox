/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Base from 'terra-base';
import 'cerner-consumer-theme';
import Home from './components/home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Base className="custom-App" locale="en">
        <Home />
      </Base>
    );
  }
}

export default App;
