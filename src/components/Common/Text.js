import React, { PropTypes } from 'react';
import styled from 'styled-components';

const TextElement = styled.default.span`
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  ${props => props.color && `color: ${props.color};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.padding && `padding: ${props.padding};`}
  
`;

export default function Text({ children, size, weight, color, margin, padding, style }) {
  return (
    <TextElement
      size={size}
      weight={weight}
      color={color}
      margin={margin}
      style={style}
      padding={padding}
    >
      {children}
    </TextElement>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  style: PropTypes.object,
};
