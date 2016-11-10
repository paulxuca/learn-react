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
  margin: 0 6px;
  color: #ced8da;
  font-size: 20px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #575A5B;
  }
  &:first-of-type {
    margin-left: 20px;
  }
`;

const Pane = ({ step, lesson }) => {
  const { stepName, stepNumber } = step;
  const { totalTask, currentStep } = lesson;

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
          {stepNumber}
        </Text>
        <Text
          size={24}
          weight={300}
          margin="0 10px"
        >
          {stepName}
        </Text>
      </PaneSection>
      <PaneSection flex={0.5} row>
        <Text
          size={20}
          weight={400}
          color="#899b9f"
        >
          Goal {currentStep}/{totalTask}
        </Text>
        <ChevronArrow
          className="fa fa-chevron-left"
        />
        <ChevronArrow
          className="fa fa-chevron-right"
        />
        <Navigator
          totalSteps={totalTask}
          activeStep={currentStep}
        />
      </PaneSection>
      <PaneSection flex={4}>
        <Card />
      </PaneSection>
    </PaneContainer>
  );
};

Pane.propTypes = {
  step: PropTypes.object,
  lesson: PropTypes.object,
};

export default Pane;
