import { observable } from 'mobx';
import { getLessonApi } from '../utils/api';

class Lesson {
  @observable totalSteps;
  @observable currentStep;
  @observable sectionTitle;
  @observable sectionNumber;
  @observable lessonName;
  @observable currentSectionData;

  constructor() {
    this.sectionNumber = 1;
    this.currentStep = 1;
    // this.totalSteps = Object.keys(mock.steps).length;
    // this.currentSectionData = mock.steps;
    // this.lessonName = 'Beginning with React and ES6';
    // this.sectionTitle = 'Beginning';

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

  async getLesson() {
    const jsonData = await fetch(getLessonApi(), {
      method: 'POST',
    });
    const { sections, steps, lessonTitle, files } = await jsonData.json();
    // const currentSectionStepsId = data.sections[this.currentStep].steps;
    this.totalSteps = sections[this.currentStep].steps.length;
    this.currentSectionData = steps;
    this.lessonName = lessonTitle;
    this.sectionTitle = sections[this.currentStep].title;
    return files;
  }

}

export default Lesson;
