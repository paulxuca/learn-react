import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Text from '../Common/Text';
import Card from './Card';
import Navigator from './Navigator';

const PaneContainer = styled.default.div`
  flex: 1;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const PaneSection = styled.default.div`
  flex: ${props => props.flex};
  ${props => props.row && 'flex-direction: row;'}
`;

const ChevronArrow = styled.default.i`
  color: #ced8da;
  font-size: 20px;
  transition: all 0.2s;
  &:hover {
    color: #575A5B;
  }
`;

const ChevronArrowButton = styled.default.button`
  &:focus {
    outline:0;
  }
  &:first-of-type {
    margin-left: 10px;
  }
`;

const Pane = ({
  totalSteps,
  currentStep,
  sectionTitle,
  sectionNumber,
  incrementStep,
  decrementStep,
  goToStep,
  currentStepData,
}) => {
  return (
    <PaneContainer>
      <PaneSection flex={1}>
        <Text
          size={24}
          weight={600}
          padding="0 10px"
          style={{
            borderRight: '1px solid #DDD',
          }}
        >
          {sectionNumber}
        </Text>
        <Text
          size={24}
          weight={300}
          margin="0 10px"
        >
          {sectionTitle}
        </Text>
      </PaneSection>
      <PaneSection flex={0.5} row>
        <Text
          size={20}
          weight={400}
          color="#899b9f"
        >
          Step {currentStep}/{totalSteps}
        </Text>
        <ChevronArrowButton
          onClick={decrementStep}
        >
          <ChevronArrow
            className="fa fa-chevron-left"
          />
        </ChevronArrowButton>
        <ChevronArrowButton
          onClick={incrementStep}
        >
          <ChevronArrow
            className="fa fa-chevron-right"
          />
        </ChevronArrowButton>
        <Navigator
          totalSteps={totalSteps}
          activeStep={currentStep}
          goToStep={goToStep}
        />
      </PaneSection>
      <PaneSection flex={4}>
        <Card header={currentStepData} />
      </PaneSection>
    </PaneContainer>
  );
};

Pane.propTypes = {
  sectionTitle: PropTypes.string,
  sectionNumber: PropTypes.number,
  currentStep: PropTypes.number,
  incrementStep: PropTypes.func,
  decrementStep: PropTypes.func,
  totalSteps: PropTypes.number,
  goToStep: PropTypes.func,
  currentStepData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

export default Pane;
