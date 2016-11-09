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
