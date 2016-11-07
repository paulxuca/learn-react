import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import Button from '../Button';
import Text from './Text';


const NavigationContainer = styled.default.div`
  display: flex;
  max-height: 60px;
  flex: 1;
  background: white;
  border-bottom: 1px solid #EEE;
  flex-direction: row;
`;

const NavigationSection = styled.default.div`
  flex: 1;
  max-width: ${props => props.width}px;
  border-right: 1px solid #EEE;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <NavigationContainer>
    <NavigationSection width={200} />
    <NavigationSection />
    <NavigationSection width={400}>
      <Button
        width={160}
        color="#4a90e2"
        important
      >
        <Text
          size={12}
          weight={400}
        >Register for account</Text>
      </Button>
      <Link to="/users/sign_in">
        <Button
          width={100}
          color="#aebdc1"
          hover="#393d40"
        >
          <Text
            size={12}
            weight={400}
          >Sign in</Text>
        </Button>
      </Link>
    </NavigationSection>
  </NavigationContainer>
);

