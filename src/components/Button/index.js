import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ButtonElement = styled.default.button`
  flex: 1;
  max-width: ${props => props.width}px;
  min-width: ${props => props.width}px;
  padding: 5px;
  color: ${props => props.color};
  font-size: 12px;
  transition: all 0.25s;
  cursor: pointer;
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
    }
    return `
      &:hover {
        color: ${props.hover};
      }
    `;
  }}
`;

export default function Button({ children, important, color, width, hover }) {
  return (
    <ButtonElement
      important={important}
      color={color}
      hover={hover}
      width={width}
    >
      <span>{children}</span>
    </ButtonElement>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  important: PropTypes.bool,
  color: PropTypes.string,
  hover: PropTypes.string,
  width: PropTypes.number,
};

