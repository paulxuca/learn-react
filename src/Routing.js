/*
  eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
*/

import React from 'react';
import { BrowserRouter, Match } from 'react-router';

import Navigation from './components/Common/Navigation';
import AppContainer from './components/Common/AppContainer';


class Routing extends React.Component { // eslint-disable-line
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Navigation />
          <Match pattern="/" exactly component={require('react-router?name=home!./containers/Home')} />
          <Match pattern="/users/sign_in" exactly component={require('react-router?name="signin!./containers/Auth/SignIn')} />
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default Routing;
