import React from 'react';
import styled from 'styled-components';

const InputFieldset = styled.default.fieldset`
  background: transparent;
  border: none;
`;

const InputLabel = styled.default.label`
  font-size: 14px;
  font-weight: 600;
  color: #575a5b;
  margin-left: 10px;
`;

const InputElement = styled.default.input`
  width: 100%;
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
