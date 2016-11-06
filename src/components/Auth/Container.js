import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Auth = styled.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthPrompt = styled.default.div`
  flex: 1;
  max-width: 400px;
  min-height: 600px;
  display: flex;
`;

const AuthPromptContainer = styled.default.div`
  margin: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
`;

export default function AuthContainer({ children }) {
  return (
    <Auth>
      <AuthPrompt>
        <AuthPromptContainer>
          {children}
        </AuthPromptContainer>
      </AuthPrompt>
    </Auth>
  );
}

AuthContainer.propTypes = {
  children: PropTypes.node,
};
