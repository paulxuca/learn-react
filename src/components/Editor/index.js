import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/lint/lint';

import React, { PropTypes, Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import CodeMirror from 'codemirror';

import modes from './modes';
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
  background-color: #2B303B;
`;

@observer @inject('store')
class Editor extends Component {
  static propTypes = {
    store: PropTypes.object,
    fileIndex: PropTypes.number,
    fileType: PropTypes.string,
  };

  constructor() {
    super();
    this.setEditorValue = this.setEditorValue.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  componentDidMount() {
    const { currentFile } = this.props.store.editor;


    this.codemirror = CodeMirror(document.getElementById('code'), {
      theme: 'learncode',
      value: currentFile.contents,
      lineNumbers: true,
      lineWrapping: false,
      mode: this.props.fileType,
      tabSize: 2,
      lint: false,
      indentUnit: 2,
      autoCloseTags: true,
      matchTags: {
        bothTags: true,
      },
      gutters: ['CodeMirror-lint-markers'],
    });
    this.codemirror.on('change', this.onCodeChange);
  }

  componentWillReceiveProps(nextProps) {
    // Different mode
    if (nextProps.fileType !== this.props.fileType) {
      modes(nextProps.fileType, CodeMirror, this.codemirror);
    }

    // Different File
    if (nextProps.fileIndex !== this.props.fileIndex) {
      this.props.store.editor.updateOldDoc(this.codemirror.getValue(), this.props.fileIndex);
      this.codemirror.swapDoc(CodeMirror.Doc(nextProps.currentFile.contents));
    }
  }

  onCodeChange() {
    this.props.store.editor.updatedCode();
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
