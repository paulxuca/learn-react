import React, { PropTypes } from 'react';
import styled from 'styled-components';

const TextElement = styled.default.span`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  color: ${props => props.color};
`;

export default function Text({ children, size, weight, color }) {
  return (
    <TextElement size={size} weight={weight} color={color}>
      {children}
    </TextElement>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string,
};
