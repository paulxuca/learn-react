import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import Text from '../../components/Common/Text';
import AuthContainer from '../../components/Auth/Container';
import Input from '../../components/Auth/Input';
import Button from '../../components/Button';

const SignInSection = styled.default.div`
  flex: 1;
  display: flex;
  max-height: ${props => props.height || 150}px;
  margin: ${props => props.margins || '5px'};
  width: ${props => props.width || '100%'};
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.row ? 'row' : 'column'};
`;

const SocialIcon = styled.default.i`
  color: white;
`;

@inject('store') @observer
class SignIn extends React.Component {
  static propTypes = {
    store: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { loginWithPopup, loginAccount } = this.props.store.auth;
    return (
      <AuthContainer>
        <Text size={22} weight={700} color="#575a5b">Sign in</Text>
        <Text size={14} weight={400} color="#aebdc1">to get started and access courses</Text>
        <SignInSection height={200} margins="40px 10px 10px 10px">
          <Input
            type="text"
            label="Your email address"
            placeholder="diane.huang@email.com"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type="password"
            label="Your password"
            placeholder="password"
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
          <Button
            onClick={() => loginAccount(this.state.email, this.state.password)}
            color="#8AC5C6"
            hover="#98cccd"
            width={200}
            height={40}
            large
            filled
            rounded
          >
            <Text size={14} weight={500} color="white">Sign in</Text>
          </Button>
        </SignInSection>
        <SignInSection height={100} margins="10px">
          <Text size={12} weight={400} color="#575a5b">Or Sign in With...</Text>
          <SignInSection height={50} row>
            <Button color="black" hover="#1b1a1a" width={100} height={40} onClick={() => loginWithPopup('github')} filled>
              <SocialIcon className="fa fa-github" />
            </Button>
            <Button color="#4C6CA6" hover="#5576b1" width={100} height={40} onClick={() => loginWithPopup('facebook')} filled>
              <SocialIcon className="fa fa-facebook" />
            </Button>
            <Button color="#1DA1F4" hover="#3badf5" width={100} height={40} onClick={() => loginWithPopup('twitter')} filled>
              <SocialIcon className="fa fa-twitter" />
            </Button>
          </SignInSection>
        </SignInSection>
      </AuthContainer>
    );
  }
}

export default SignIn;
