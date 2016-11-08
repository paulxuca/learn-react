import { observable } from 'mobx';
import { loginWithProvider, subscribeToAuthChange } from '../utils/firebase';

class Auth {
  @observable userAccount = false;
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
}

export default Auth;
