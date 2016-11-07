import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Text from '../Common/Text';

const ButtonElement = styled.default.button`
  flex: 1;
  ${props => props.width && `
    min-width: ${props.width}px;
    max-width: ${props.width}px;  
  `}
  ${props => props.height && `
    max-height: ${props.height}px;
    min-height: ${props.height}px;
  `}
  padding: 5px;
  color: ${props => props.color};
  font-size: 14px;
  transition: all 0.25s;
  cursor: pointer;
  margin: 10px;
  &:focus {
    outline: 0;
  }
  ${props => props.rounded && 'border-radius: 100px'};
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
  rounded,
}) {
  return (
    <ButtonElement
      important={important}
      color={color}
      hover={hover}
      width={width}
      large={large}
      filled={filled}
      rounded={rounded}
      height={height}
    >
      {children}
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
  rounded: PropTypes.bool,
};

