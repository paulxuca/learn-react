import React from 'react';
import styled from 'styled-components';

import Text from '../../components/Common/Text';
import AuthContainer from '../../components/Auth/Container';
import Input from '../../components/Auth/Input';
import Button from '../../components/Button';
import AuthIconImages from '../../static/assets/social_icons.png';


const SignInSection = styled.default.div`
  flex: 1;
  display: flex;
  max-height: ${props => props.height || 150}px;
  margin: ${props => props.margins || '5px'};
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.row ? 'row' : 'column'};
`;

const IconImage = styled.default.div`
  background-image: url(${AuthIconImages});
  ${props => {
    if (props.type === 'google') {
      return 'background-position: 0px 0;';
    }
    return 'background-position: -60px 0;';
  }}
  width: 30px;
  height: 30px;
  margin: 0 auto;
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
        <SignInSection height={200} margins="40px 10px 10px 10px">
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
            rounded
          >
            <Text
              size={14}
              weight={500}
              color="white"
            >Sign in</Text>
          </Button>
        </SignInSection>
        <SignInSection height={100} margins="20px">
          <Text size={12} weight={600} color="#575a5b">Or sign in with...</Text>
          <SignInSection height={50} row>
            <Button color="#DD4D41" hover="#e05d52" width={100} height={40} filled>
              <IconImage type="google" />
            </Button>
            <Button color="#4C6CA6" hover="#5576b1" width={100} height={40} filled>
              <IconImage type="facebook" />
            </Button>
          </SignInSection>
        </SignInSection>
      </AuthContainer>
    );
  }
}

export default SignIn;
