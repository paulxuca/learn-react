import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Text from '../Common/Text';

const FileSelectorContainer = styled.default.div`
  width: 100%;
`;

const FileSelectorList = styled.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
`;

const FileSelectorItem = styled.default.li`
  padding: 20px;
  display: flex;
  align-items: center;
  border-top: 3px solid ${props => props.active ? 'white' : 'transparent'};
  transition: all 0.25s;
  &:hover {
    border-color: white;
  }
`;

@inject('store') @observer
export default class FileSelector extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    const {
        fileState,
        currentSelectedFile,
        selectFile,
    } = this.props.store.editor;
    const { files } = fileState;

    return (
      <FileSelectorContainer>
        <FileSelectorList>
          {files.map((eachFile, index) =>
            <FileSelectorItem
              key={`${index}`}
              active={currentSelectedFile === index}
              onClick={() => selectFile(index)}
            >
              <Text
                color="white"
                size={14}
                weight={400}
              >
                {eachFile.fileName}
              </Text>
              {eachFile.isEntry &&
                <Text color="#ced8da" size={10} margin="0 4px">(Entry)</Text>
              }
            </FileSelectorItem>)}
        </FileSelectorList>
      </FileSelectorContainer>
    );
  }
}
