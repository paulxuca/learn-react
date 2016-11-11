import Auth from './auth';
import Lesson from './lesson';

export default providers => ({
  auth: new Auth(providers),
  lesson: new Lesson(),
});
