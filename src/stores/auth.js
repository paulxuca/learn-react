import { observable } from 'mobx';
import {
    loginWithProvider,
    subscribeToAuthChange,
    registerUser,
    loginUser,
    getCurrentUser,
} from '../utils/firebase';

class Auth {
  @observable userAccount = getCurrentUser();
  @observable authError = false;

  constructor(providers) {
    this.providers = providers;
    this.loginWithPopup = this.loginWithPopup.bind(this);
    this.authStateObserver = this.authStateObserver.bind(this);
    subscribeToAuthChange(this.authStateObserver);
  }

  authStateObserver(user) {
    this.userAccount = user;
  }

  async loginWithPopup(type) {
    const usedProvider = this.providers[type];
    try {
      await loginWithProvider(usedProvider);
    } catch (error) {
      this.authError = error;
    }
  }

  async createAccount(email, password) {
    try {
      await registerUser(email, password);
    } catch (error) {
      this.authError = error;
    }
  }

  async loginAccount(email, password) {
    try {
      await loginUser(email, password);
    } catch (error) {
      this.authError = error;
    }
  }
}

export default Auth;
