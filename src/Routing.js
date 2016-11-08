/*
  eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
*/

import React, { PropTypes } from 'react';
import { BrowserRouter, Match, Redirect } from 'react-router';
import { Provider, observer } from 'mobx-react';

import Navigation from './components/Common/Navigation';
import AppContainer from './components/Common/AppContainer';

function AuthorizedRoute({ Component, ...restOfProps }) {
  return (
    <Match
      {...restOfProps}
      render={(props) => {
        if (props.store.auth.userAccount) {
          return <Component {...props} />;
        }
        return <Redirect to="/users/sign_in" />;
      }}
    />
  );
}

AuthorizedRoute.propTypes = {
  Component: PropTypes.node,
  store: PropTypes.object,
};

@observer
class Routing extends React.Component { // eslint-disable-line
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer>
            <Navigation />
            <Match pattern="/" exactly component={require('react-router?name=home!./containers/Home')} />
            <Match pattern="/users/sign_in" exactly component={require('react-router?name="signin!./containers/Auth/SignIn')} />
          </AppContainer>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default Routing;
