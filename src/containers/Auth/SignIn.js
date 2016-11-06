import React from 'react';
import styled from 'styled-components';

import Text from '../../components/Common/Text';
import AuthContainer from '../../components/Auth/Container';
import Input from '../../components/Auth/Input';
import Button from '../../components/Button';


const SignInSection = styled.default.div`
  flex: 1;
  display: flex;
  max-height: ${props => props.height || 150}px;
  margin: 40px 10px;
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <AuthContainer>
        <Text size={22} weight={700} color="#575a5b">Sign in</Text>
        <Text size={14} weight={400} color="#aebdc1">for access to courses and lessons</Text>
        <SignInSection height={200}>
          <Input
            type="text"
            label="Your email address"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type="password"
            label="Your password"
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
          <Button
            hover="#1c91a8"
            color="#21abc7"
            width={200}
            height={40}
            large
            filled
          >
            Sign in
          </Button>
        </SignInSection>
        <SignInSection>

        </SignInSection>
      </AuthContainer>
    );
  }
}

export default SignIn;
