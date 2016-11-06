import React, { PropTypes } from 'react';
import styled from 'styled-components';

const AppContainer = styled.default.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f6f8f8;
`;

const App = ({ children }) => (
  <AppContainer>
    {children}
  </AppContainer>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;

