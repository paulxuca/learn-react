import { observable } from 'mobx';
import defaultFileState from '../modules/starters/default';

const initialSaveState = (numberOfFiles) => {
  const saveState = [];
  for (let i = 0; i < numberOfFiles; i += 1) {
    saveState.push({
      hasChanged: false,
    });
  }
  return saveState;
};

export default class Editor {
  @observable fileState;
  @observable saveState;
  @observable currentSelectedFile;
  @observable isSaved = true;

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
    const saveState = initialSaveState(numberOfFiles);

    this.saveState = saveState;
    this.fileState = fileState;
  }

  updatedCode() {
    this.isSaved = false;
    this.saveState[this.currentSelectedFile].hasChanged = true;
  }

  saveCode() {
    this.isSaved = true;
    this.saveState = initialSaveState(this.fileState.files.length);
  }

  updateOldDoc(oldDoc, index) {
    this.fileState.files[index].contents = oldDoc;
  }

  get currentFile() {
    return this.fileState.files[this.currentSelectedFile];
  }
}
