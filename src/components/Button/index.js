import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Text from '../Common/Text';

const ButtonElement = styled.default.button`
  flex: 1;
  max-width: ${props => props.width}px;
  min-width: ${props => props.width}px;
  max-height: ${props => props.height}px;
  min-height: ${props => props.height}px;
  padding: 5px;
  color: ${props => props.color};
  font-size: 14px;
  transition: all 0.25s;
  cursor: pointer;
  margin: 10px;
  ${(props) => {
    if (props.important) {
      return `
        border: 1px solid ${props.color};
        border-radius: 100px;
        &:hover {
          background-color: ${props.color};
          color: white;
        }
      `;
    } else if (props.filled) {
      return `
        background-color: ${props.color};
        border-radius: 100px;
        &:hover {
          background-color: ${props.hover};
        }
      `;
    }
    return `
      &:hover {
        color: ${props.hover};
      }
    `;
  }}
`;

export default function Button({
  children,
  important,
  color,
  width,
  hover,
  large,
  filled,
  height,
}) {
  return (
    <ButtonElement
      important={important}
      color={color}
      hover={hover}
      width={width}
      large={large}
      filled={filled}
      height={height}
    >
      <Text
        size={large ? 16 : 12}
        weight={400}
        color={filled && 'white'}
      >{children}</Text>
    </ButtonElement>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  important: PropTypes.bool,
  large: PropTypes.bool,
  filled: PropTypes.bool,
  color: PropTypes.string,
  hover: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

