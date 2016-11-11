import { observable } from 'mobx';
import defaultFileState from '../modules/starters/default';

export default class Editor {
  @observable fileState;
  @observable currentSelectedFile;

  constructor() {
    this.currentSelectedFile = 0;
    this.fileState = defaultFileState;

    this.selectFile = this.selectFile.bind(this);
  }

  selectFile(index) {
    this.currentSelectedFile = index;
  }
}
