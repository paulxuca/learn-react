import React, { PropTypes, Component } from 'react';
import { inject, observer } from 'mobx-react';
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
  ${props => props.height && `
    max-height: ${props.height}px;
    min-height: ${props.height}px;  
  `}
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

@inject('store') @observer
export default class Pane extends Component {
  static propTypes = {
    store: PropTypes.object,
  }

  render() {
    const {
    totalSteps,
    currentStep,
    sectionTitle,
    sectionNumber,
    incrementStep,
    decrementStep,
    goToStep,
    currentSectionData,
  } = this.props.store.lesson;

    return (
      <PaneContainer>
        <PaneSection
          height={100}
          flex={1}
        >
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
        <PaneSection
          flex={0.5}
          height={50}
          row
        >
          <Text
            size={20}
            weight={400}
            color="#899b9f"
          >
            Step {currentStep}/{totalSteps}
          </Text>
          <ChevronArrowButton
            onClick={() => decrementStep()}
          >
            <ChevronArrow
              className="fa fa-chevron-left"
            />
          </ChevronArrowButton>
          <ChevronArrowButton
            onClick={() => incrementStep()}
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
          <Card header={currentSectionData[currentStep].instruction} />
        </PaneSection>
      </PaneContainer>
    );
  }
}
