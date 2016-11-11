import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Editor from '../../components/Editor';
import Pane from '../../components/Lesson/Pane';
import ProtectedRoute from '../../components/Common/ProtectedRoute';
import mock from './mock';

const LessonWindow = styled.default.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LessonPane = styled.default.div`
  flex:${props => props.flexValue};
  ${props => props.flex && 'display: flex;'}
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`;

const LessonBar = styled.default.div`
  flex: 1;
  display: flex;
  background-color: #202634;
  border-bottom: 1px solid rgb(35, 46, 60);
  max-height: 50px;
`;

@inject('store') @observer
export default class Lesson extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    const { lesson } = this.props.store;
    const {
      totalSteps,
      currentStep,
      sectionTitle,
      sectionNumber,
      incrementStep,
      decrementStep,
      goToStep,
      currentSectionData,
    } = lesson;

    return (
      <ProtectedRoute>
        <LessonWindow>
          <LessonBar />
          <LessonPane flex flexValue={1}>
            <LessonPane
              backgroundColor="#f7f9f9"
              flexValue={1}
              flex
            >
              <Pane
                totalSteps={totalSteps}
                currentStep={currentStep}
                sectionTitle={sectionTitle}
                sectionNumber={sectionNumber}
                incrementStep={() => incrementStep()}
                decrementStep={() => decrementStep()}
                goToStep={goToStep}
                currentStepData={currentSectionData[currentStep]}
              />
            </LessonPane>
            <LessonPane flexValue={2}>
              <Editor />
            </LessonPane>
          </LessonPane>
        </LessonWindow>
      </ProtectedRoute>
    );
  }
}
