import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Editor from '../../components/Editor';
import FileSelector from '../../components/Editor/FileSelector';
import Pane from '../../components/Lesson/Pane';
import ProtectedRoute from '../../components/Common/ProtectedRoute';
import Text from '../../components/Common/Text';

import { resolveType } from '../../utils/editor';

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

  constructor() {
    super();
    this.handleSaveShortcut = this.handleSaveShortcut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleSaveShortcut);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleSaveShortcut);
  }

  handleSaveShortcut(event) {
    if ((event.metaKey || event.ctrlKey) && event.keyCode === 83) {
      event.preventDefault();
      this.props.store.editor.saveCode();
    }
  }

  render() {
    const { lesson, editor } = this.props.store;
    const { lessonName } = lesson;
    const { currentFile, currentSelectedFile } = editor;

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
              <FileSelector
                editor={editor}
              />
            </LessonPane>
          </LessonBar>
          <LessonPane flex flexValue={1}>
            <LessonPane
              backgroundColor="#f7f9f9"
              flexValue={1}
              flex
            >
              <Pane />
            </LessonPane>
            <LessonPane flexValue={2}>
              <Editor
                fileType={resolveType(currentFile.fileName)}
                currentFile={currentFile}
                fileIndex={currentSelectedFile}
              />
            </LessonPane>
          </LessonPane>
        </LessonWindow>
      </ProtectedRoute>
    );
  }
}
