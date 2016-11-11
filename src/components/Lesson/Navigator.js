import React, { PropTypes } from 'react';
import styled from 'styled-components';

const StepCounterContainer = styled.default.div`
  display: inline;
  float: right;
`;

const StepCounter = styled.default.a`
  margin: 0 5px;
  border-radius: 100%;
  font-size: 12px;
  height: 20px;
  width: 20px;
  display: inline-block;
  position: relative;
  border: 2px solid ${props => props.active ? '#575a5b' : '#ced8da'};
  ${props => props.active && 'background-color: #575A5B;'}
  cursor: pointer;
  transition: all 0.25s;
  > span {
    position: absolute;
    left: 5px;
    color: ${props => props.active ? 'white' : '#ced8da'};
    font-weight: 500;
  }
  &:hover {
    ${props => {
      if (!props.active) {
        return `
          border: 2px solid #575A5B;
          background-color: #575A5B;
          color: white !important;
        `;
      }
    }}
  }
`;

const Navigator = ({ totalSteps, activeStep, goToStep, onClick, completeSteps }) => {
  const totalStepElement = [];

  for (let i = 0; i < totalSteps; i += 1) {
    totalStepElement.push(
      <StepCounter
        key={i}
        active={i + 1 === activeStep}
        onClick={() => goToStep(i + 1)}
      >
        <span>{i + 1}</span>
      </StepCounter>
    );
  }

  return (
    <StepCounterContainer>
      {totalStepElement}
    </StepCounterContainer>
  );
};

Navigator.propTypes = {
  totalSteps: PropTypes.number,
  activeStep: PropTypes.number,
  onClick: PropTypes.func,
  completeSteps: PropTypes.arrayOf([PropTypes.number]),
  goToStep: PropTypes.func,
};

export default Navigator;
