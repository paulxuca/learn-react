import { observable } from 'mobx';
import defaultFileState from '../modules/starters/default';

export default class Editor {
  @observable fileState;
  @observable saveState;
  @observable currentSelectedFile;

  constructor() {
    this.currentSelectedFile = 0;

    this.setFileState(defaultFileState);
    this.setFileState = this.setFileState.bind(this);
    this.selectFile = this.selectFile.bind(this);
    this.updateOldDoc = this.updateOldDoc.bind(this);
  }

  selectFile(index) {
    this.currentSelectedFile = index;
  }

  setFileState(fileState) {
    const numberOfFiles = fileState.files.length;
    const saveState = [];
    for (let i = 0; i < numberOfFiles; i += 1) {
      saveState.push({
        hasChanged: false,
      });
    }
    this.saveState = saveState;
    this.fileState = fileState;
  }

  updatedCode() {
    this.saveState[this.currentSelectedFile].hasChanged = true;
  }

  updateOldDoc(oldDoc, index) {
    this.fileState.files[index].contents = oldDoc;
  }

  get currentFile() {
    return this.fileState.files[this.currentSelectedFile];
  }
}
