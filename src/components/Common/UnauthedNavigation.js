import React from 'react';
import { Link } from 'react-router';
import { NavigationSection } from './Navigation';
import Button from '../Button';
import Text from './Text';


export default () => (
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
);
