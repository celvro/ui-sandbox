/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */
import 'cerner-consumer-theme';
import React, { Component } from 'react';
import Base from 'terra-base';
import './App.css';
import AnchorLinkTest from './components/anchorlink/AnchorLinkTest';
import ToggleSectionHeaderTest from './components/toggle-section-bug/ToggleSectionHeaderTest';

class App extends Component {
  render() {
    return (
      <Base className="custom-App" locale="en-US">
        <ToggleSectionHeaderTest />
        <AnchorLinkTest />
      </Base>
    );
  }
}

export default App;
