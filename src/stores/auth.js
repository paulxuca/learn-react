import { observable } from 'mobx';
import {
    loginWithProvider,
    subscribeToAuthChange,
    registerUser,
    loginUser,
} from '../utils/firebase';
import {
  set,
  get,
} from '../utils/storage';

function authStateObserver(user) {
  set('user', JSON.stringify(user));
}

class Auth {
  @observable userAccount = false;
  @observable isAuthenticating = false;
  @observable authError = false;
  @observable isAuthenticated = false;

  constructor(providers) {
    this.providers = providers;
    this.isAuthenticating = true;
    this.loginWithPopup = this.loginWithPopup.bind(this);
    this.attemptLocalAuth = this.attemptLocalAuth.bind(this);
    subscribeToAuthChange(authStateObserver);
  }

  async loginWithPopup(type) {
    const usedProvider = this.providers[type];
    try {
      await loginWithProvider(usedProvider);
    } catch (error) {
      this.authError = error;
    }
  }

  async attemptLocalAuth() {
    this.isAuthenticating = true;
    const userOrNull = await get('user');
    if (userOrNull !== 'null' && userOrNull !== null) {
      this.isAuthenticated = true;
      this.userAccount = JSON.parse(userOrNull);
    }
    this.isAuthenticating = false;
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
