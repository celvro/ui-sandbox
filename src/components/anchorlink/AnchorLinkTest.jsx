import React from 'react';
import { injectIntl, intlShape } from 'terra-base';

const AnchorLinkTest = ({ intl }) => (
  <React.Fragment>
    <a href="#blue">Blue</a>
    <br />
    <a href="#green">Green</a>
    <br />
    <a href="#red">Red</a>
    <div style={{ height: 1000, backgroundColor: 'blue', margin: 20 }} id="blue">
      {intl.formatMessage({ id: 'blue' })}
    </div>
    <div style={{ height: 1000, backgroundColor: 'green', margin: 20 }} id="green">
      {intl.formatMessage({ id: 'green' })}
    </div>
    <div style={{ height: 1000, backgroundColor: 'red', margin: 20 }} id="red">
      {intl.formatMessage({ id: 'red' })}
    </div>
  </React.Fragment>
);

AnchorLinkTest.propTypes = {
  intl: intlShape,
};

export default injectIntl(AnchorLinkTest);
