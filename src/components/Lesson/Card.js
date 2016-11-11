import React, { PropTypes } from 'react';
import styled from 'styled-components';

const CardContainer = styled.default.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  border-radius: 2px;
  position: relative;
  min-height: 100px;
  padding: 20px;
  font-size: 13.6px;
  font-weight: 400;
  line-height: 20px;
`;

const LessonCard = ({ header }) => (
  <CardContainer>
    <span dangerouslySetInnerHTML={{ __html: header }} />
  </CardContainer>
);

LessonCard.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default LessonCard;
