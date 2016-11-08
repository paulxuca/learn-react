/*
  eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
*/

import React, { PropTypes } from 'react';
import { BrowserRouter, Match } from 'react-router';
import { Provider, observer } from 'mobx-react';

import Navigation from './components/Common/Navigation';
import AppContainer from './components/Common/AppContainer';
import ProtectedRoute from './components/Common/ProtectedRoute';

@observer
class Routing extends React.Component { // eslint-disable-line
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    const { store } = this.props;

    return (
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer>
            <Navigation />
            <Match pattern="/" exactly component={require('react-router?name=home!./containers/Home')} />
            <Match pattern="/users/sign_in" exactly component={require('react-router?name="signin!./containers/Auth/SignIn')} />
            <ProtectedRoute>
              <Match pattern="/courses" exactly component={require('react-router?name=home!./containers/Courses')} />
            </ProtectedRoute>
          </AppContainer>
        </Provider>
      </BrowserRouter>
    );
  }
}


export default Routing;
