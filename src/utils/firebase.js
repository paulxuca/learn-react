import 'firebase/auth';
import firebase from 'firebase/app';
import config from './config';

export const initFirebase = () => {
  firebase.initializeApp(config.firebase);
};

export const getProviders = () => ({
  facebook: new firebase.auth.FacebookAuthProvider(),
  github: new firebase.auth.GithubAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider(),
});

export const subscribeToAuthChange = fn => firebase.auth().onAuthStateChanged(fn);

export const loginWithProvider = provider => firebase.auth().signInWithPopup(provider);

