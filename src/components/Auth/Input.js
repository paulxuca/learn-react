import React from 'react';
import styled from 'styled-components';

const InputFieldset = styled.default.fieldset`
  background: transparent;
  border: none;
  display: flex;
  width: 100%;
`;

const InputLabel = styled.default.label`
  font-size: 14px;
  font-weight: 600;
  color: #575a5b;
`;

const InputElement = styled.default.input`
  width: 100%;
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  flex: 1;
  min-height: 40px;
  max-height: 40px;
  border: 1px solid #aebdc1;
  padding: 10px;
  margin: 5px;
  background-color: white;
  border-radius: 3px;
  &:focus{
    outline: 0;
    border-color: #8AC5C6;
    box-shadow: 0px 0px 6px 0px #669696;
  }
  &:hover{
    background: rgba(255, 255, 235, 0.8);
  }
`;

export default function Input(props) {
  const { label, ...rest } = props;
  return (
    <InputFieldset>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <InputElement {...rest} name={label} />
    </InputFieldset>
  );
}
