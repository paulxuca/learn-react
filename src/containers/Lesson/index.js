import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from '../../components/Editor';
import ProtectedRoute from '../../components/Common/ProtectedRoute';


const LessonWindow = styled.default.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LessonPane = styled.default.div`
  flex: 1;
`;

const LessonBar = styled.default.div`
  flex: 1;
  display: flex;
  background-color: #202634;
  border-bottom: 1px solid rgb(35, 46, 60);
  max-height: 50px;
`;

export default class Lesson extends Component {
  render() {
    return (
      <ProtectedRoute>
        <LessonWindow>
          <LessonBar />
          <LessonPane style={{ display: 'flex' }}>
            <LessonPane />
            <LessonPane>
              <Editor />
            </LessonPane>
          </LessonPane>
        </LessonWindow>
      </ProtectedRoute>
    );
  }
}
