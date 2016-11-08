import React, { PropTypes, Component } from 'react';
import { Redirect } from 'react-router';
import { inject, observer } from 'mobx-react';

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
        return children;
      }
      return <Redirect to="/users/sign_in" />;
    }
    return null;
  }
}

export default ProtectedRoute;