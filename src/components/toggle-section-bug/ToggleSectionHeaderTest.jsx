/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import List from 'terra-list';
import ToggleSectionHeader from 'terra-toggle-section-header';

class ToggleSectionHeaderTest extends Component {
  render() {
    return (
      <List>
        <List.Item content={(
          <ToggleSectionHeader title="Section header test" isTransparent>
            <button>Test Button</button>
          </ToggleSectionHeader>
        )} />
      </List>
    );
  }
}

export default ToggleSectionHeaderTest;
