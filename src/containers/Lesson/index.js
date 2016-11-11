import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Editor from '../../components/Editor';
import FileSelector from '../../components/Editor/FileSelector';
import Pane from '../../components/Lesson/Pane';
import ProtectedRoute from '../../components/Common/ProtectedRoute';
import Text from '../../components/Common/Text';

const LessonWindow = styled.default.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LessonPane = styled.default.div`
  flex:${props => props.flexValue};
  ${props => props.center && 'justify-content: flex-start;align-items: center'}
  ${props => props.flex && 'display: flex;'}
  ${props => props.backgroundColor && `background-color: ${props.backgroundColor};`}
`;

const LessonBar = styled.default.div`
  flex: 1;
  display: flex;
  background-color: #202634;
  border-bottom: 1px solid rgb(35, 46, 60);
  max-height: 60px;
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
      lessonName,
    } = lesson;

    return (
      <ProtectedRoute>
        <LessonWindow>
          <LessonBar>
            <LessonPane
              flex
              flexValue={1}
              center
            >
              <Text
                color="white"
                weight={300}
                size={18}
                margin="0 20px"
              >
                {lessonName}
              </Text>
            </LessonPane>
            <LessonPane
              flex
              flexValue={2}
            >
              <FileSelector />
            </LessonPane>
          </LessonBar>
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
