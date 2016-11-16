import React, { PropTypes, Component } from 'react';
import { Redirect } from 'react-router';
import { inject, observer } from 'mobx-react';
import AuthPage from '../../containers/Auth/SignIn';


@inject('store') @observer
class ProtectedRoute extends Component {
  static propTypes = {
    children: PropTypes.node,
    store: PropTypes.object,
  };

  componentWillMount() {
    const { attemptLocalAuth } = this.props.store.auth;
    attemptLocalAuth();
  }

  render() {
    const { children, store } = this.props;
    const { isAuthenticating, isAuthenticated } = store.auth;
    if (!isAuthenticating) {
      if (isAuthenticated) {
        if (window.location.pathname === '/users/sign_in') {
          return <Redirect to="/learn" />;
        }
        return children;
      }
      return <AuthPage />;
    }
    return null;
  }
}

export default ProtectedRoute;
