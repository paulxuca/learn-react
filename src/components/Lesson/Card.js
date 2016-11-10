import React, { PropTypes } from 'react';
import styled from 'styled-components';

const CardContainer = styled.default.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  border-radius: 2px;
  position: relative;
  min-height: 100px;
`;

const LessonCard = ({ children }) => (
  <CardContainer>
    {children}
  </CardContainer>
);

LessonCard.propTypes = {
  children: PropTypes.node,
};

export default LessonCard;
