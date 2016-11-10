import { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
export default class UnprotectedRoute extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    store: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.store.auth.isAuthenticating = false;
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
