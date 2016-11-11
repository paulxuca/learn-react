import Auth from './auth';
import Lesson from './lesson';
import Editor from './editor';

export default providers => ({
  auth: new Auth(providers),
  lesson: new Lesson(),
  editor: new Editor(),
});
