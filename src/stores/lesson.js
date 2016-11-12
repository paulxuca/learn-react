import { observable } from 'mobx';
import mock from './mock';

class Lesson {
  @observable totalSteps;
  @observable currentStep;
  @observable sectionTitle;
  @observable sectionNumber;
  @observable lessonName;
  @observable currentSectionData;

  constructor() {
    this.totalSteps = Object.keys(mock.steps).length;
    this.currentStep = 1;
    this.currentSectionData = mock.steps;
    this.lessonName = 'Beginning with React and ES6';
    this.sectionTitle = 'Beginning';
    this.sectionNumber = 1;

    this.decrementStep = this.decrementStep.bind(this);
    this.incrementStep = this.incrementStep.bind(this);
    this.goToStep = this.goToStep.bind(this);
  }

  incrementStep() {
    if (this.currentStep < this.totalSteps) this.currentStep += 1;
  }

  decrementStep() {
    if (this.currentStep > 1) this.currentStep -= 1;
  }

  goToStep(step) {
    this.currentStep = step;
  }


}

export default Lesson;
