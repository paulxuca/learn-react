import 'codemirror/lib/codemirror.css';
import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import CodeMirror from 'codemirror';

import './CodeEditorStyle.css';


const EditorWindowContainer = styled.default.div`
  flex: 1;
  flex-basis: 0;
  box-sizing: border-box;
  height: 100%;
`;

const EditorWindow = styled.default.div`
  flex: 1;
  height: 100%;
  width: 800px;
  background-color: #2B303B;
`;

class Editor extends Component {
  constructor() {
    super();
    this.setEditorValue = this.setEditorValue.bind(this);
  }

  componentDidMount() {
    this.codemirror = CodeMirror(document.getElementById('code'), {
      theme: 'learncode',
      value: '',
      lineNumbers: true,
      lineWrapping: false,
      mode: 'htmlmixed',
      tabSize: 2,
    });
  }

  setEditorValue(value) {
    this.codemirror.setValue(value);
  }

  render() {
    return (
      <EditorWindowContainer>
        <EditorWindow id="code" />
      </EditorWindowContainer>
    );
  }
}

export default Editor;
