/* eslint no-unused-expressions: 0 */
import 'sanitize.css/sanitize.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import Routing from './Routing';

injectGlobal`
  p, span {
    font-size: 12px;
  }
`;

render(
  <AppContainer>
    <Routing />
  </AppContainer>,
  document.getElementById('root') // eslint-disable-line
);

if (module.hot) {
  module.hot.accept('./Routing', () => {
    const NextLoadedApp = require('./Routing').default; // eslint-disable-line global-require

    render(
      <AppContainer>
        <NextLoadedApp />
      </AppContainer>,
      document.getElementById('root') // eslint-disable-line
    );
  });
}
