/* eslint no-unused-expressions: 0, no-undef: 1, global-require: 1 */
import 'sanitize.css/sanitize.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import { initFirebase, getProviders } from './utils/firebase';
import storeConstructor from './stores';

import Routing from './Routing';

injectGlobal`
  body {
    font-family: Open Sans, Helvetica, sans-serif;
  }
  code {
    background: #eeefef;
    border-radius: 3px;
    border: 1px solid #cdcece;
    color: #ed5111;
    font-size: 90%;
    padding: 0.15em 0.35em;
    word-break: break-word;
  }
`;
initFirebase();
const authProviders = getProviders();
const store = storeConstructor(authProviders);

render(
  <AppContainer>
    <Routing store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Routing', () => {
    const NextLoadedApp = require('./Routing').default;

    render(
      <AppContainer>
        <NextLoadedApp store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
