import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
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
  ${props => props.width && `max-width: ${props.width}px`};
  border-right: 1px solid #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationBarContainer = styled.default.div`
  flex: 1;
  margin: 0 10px;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

const NavigationBarLink = styled.default(Link)`
  color: #3B3B3D;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  display: flex;
  height: 100%;
  font-size: 14px;
  &:not(:first-child) {
    margin-left: 20px;
  }
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
          <NavigationSection>
            <NavigationBarContainer>
              <NavigationBarLink to="/courses" activeStyle={{ borderColor: '#3B3B3D' }}>Learn</NavigationBarLink>
              <NavigationBarLink to="/catalog" activeStyle={{ borderColor: '#3B3B3D' }}>Catalog</NavigationBarLink>
            </NavigationBarContainer>
          </NavigationSection>
          {renderedNavigation}
        </NavigationContainer>
      );
    }
    return null;
  }
}
