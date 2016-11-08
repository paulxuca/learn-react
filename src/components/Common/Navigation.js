import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import UnauthedNavigation from './UnauthedNavigation';


const NavigationContainer = styled.default.div`
  display: flex;
  max-height: 60px;
  flex: 1;
  background: white;
  border-bottom: 1px solid #EEE;
  flex-direction: row;
`;

export const NavigationSection = styled.default.div`
  flex: 1;
  max-width: ${props => props.width}px;
  border-right: 1px solid #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
`;

@inject('store') @observer
export default class Navigation extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    const { isAuthenticated, isAuthenticating } = this.props.store.auth;
    let renderedNavigation;

    if (!isAuthenticating) {
      if (isAuthenticated) {
        renderedNavigation = null;
      } else {
        renderedNavigation = <UnauthedNavigation />;
      }

      return (
        <NavigationContainer>
          <NavigationSection width={200} />
          <NavigationSection />
          {renderedNavigation}
        </NavigationContainer>
      );
    }
    return null;
  }
}
