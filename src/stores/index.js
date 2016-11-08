import Auth from './auth';

export default providers => ({
  auth: new Auth(providers),
});
