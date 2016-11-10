import React from 'react';
import styled from 'styled-components';

const PaneContainer = styled.default.div`
  flex: 1;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const PaneSection = styled.default.div`
  flex: ${props => props.flex};
`;

export default ({ stepName }) => (
  <PaneContainer>
    <PaneSection flex={1} />
    <PaneSection flex={2} />
  </PaneContainer>
);
