import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/auth';
import * as types from '../../actions/types';
import * as mocks from '../../mocks/auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authentication actions', () => {
  it('should set current user correctly', () => {
    const user = { username: 'john', email: 'john@doe.com' };
    const expectedAction = {
      type: types.SET_CURRENT_USER,
      user
    };
    expect(actions.setCurrentUser(user)).toEqual(expectedAction);
  });
  it('should set awaiting response indicator', () => {
    const bool = true;
    const expectedAction = {
      type: types.MAKING_AUTH_REQUEST,
      bool
    };
    expect(actions.isRequesting(true)).toEqual(expectedAction);
  });
  it('should flag signin error ', () => {
    const error = { status: 401, message: 'no no' };
    const expectedAction = {
      type: types.SIGNIN_REQUEST_ERROR,
      error
    };
    expect(actions.signinFailure(error)).toEqual(expectedAction);
  });
  it('should flag signup error', () => {
    const error = { status: 400, message: 'no no' };
    const expectedAction = {
      type: types.SIGNUP_REQUEST_ERROR,
      error
    };
    expect(actions.signupFailure(error)).toEqual(expectedAction);
  });
  it('should signal signin success', () => {
    const message = { status: 200, message: 'yes yes' };
    const expectedAction = {
      type: types.SIGNIN_REQUEST_SUCCESS,
      response: message,
    };
    expect(actions.signinSuccess(message)).toEqual(expectedAction);
  });
  it('should signal signup success', () => {
    const message = { status: 201, message: 'yes yes' };
    const expectedAction = {
      type: types.SIGNUP_REQUEST_SUCCESS,
      response: message,
    };
    expect(actions.signupSuccess(message)).toEqual(expectedAction);
  });
  it('should return null as user details', () => {
    const expectedAction = {
      type: types.ON_BOARDING_SUCCESS,
      userDetails: null,
    };
    expect(actions.onBoardingSuccess()).toEqual(expectedAction);
  });
  it('should return null as user details', () => {
    const expectedAction = {
      type: types.ON_BOARDING_SUCCESS,
      userDetails: null,
    };
    expect(actions.onBoardingSuccess()).toEqual(expectedAction);
  });
});

// Asynchronuos tests Asynchronuos tests Asynchronuos tests Asynchronuos tests

describe('Test for asynchronous call', () => {
  global.localStorage = {
    getItem: val => val,
    setItem: (key, value) => key || value
  };
  global.scroll = () => {};
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('test for login', () => {
    it('should call the login success actions', () => {
      moxios.stubRequest('/api/v1/auth/login', mocks.signinResponse);
      const expectedAction = [
        { type: types.MAKING_AUTH_REQUEST, bool: true },
        { type: types.SIGNIN_REQUEST_SUCCESS, response: mocks.signinResponse.response },
        { type: types.MAKING_AUTH_REQUEST, bool: false },
        { type: types.SET_CURRENT_USER, user: mocks.signedInUser }
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.login(mocks.testUser))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('should call the login error actions', () => {
      moxios.stubRequest('/api/v1/auth/login');
      const expectedAction = [
        { type: types.MAKING_AUTH_REQUEST, bool: true },
        { type: types.MAKING_AUTH_REQUEST, bool: false },
        { type: types.SIGNIN_REQUEST_ERROR, error: undefined }
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.login(mocks.randomUser))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('should call the onboarding success actions', () => {
      moxios.stubRequest('/api/v1/auth/login', mocks.signinResponse);
      const expectedAction = [
        { type: types.MAKING_AUTH_REQUEST, bool: true },
        { type: types.MAKING_AUTH_REQUEST, bool: false },
        { type: types.SET_CURRENT_USER, user: mocks.signedInUser }
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.onBoardUser(mocks.testUser))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('should call the onboarding error actions', () => {
      moxios.stubRequest('/api/v1/auth/login');
      const expectedAction = [
        { type: types.MAKING_AUTH_REQUEST, bool: true },
        { type: types.SIGNIN_REQUEST_ERROR, error: undefined },
        { type: types.MAKING_AUTH_REQUEST, bool: false },
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.onBoardUser(mocks.randomUser))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('should call the signup success actions', () => {
      moxios.stubRequest('/api/v1/auth/signup', mocks.signupResponse);
      const expectedAction = [
        { type: types.MAKING_AUTH_REQUEST, bool: true },
        { type: types.MAKING_AUTH_REQUEST, bool: false },
        { type: types.SIGNUP_REQUEST_SUCCESS, response: mocks.signupResponse.response },
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.signup(mocks.testUser))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('should call the signup error actions', () => {
      moxios.stubRequest('/api/v1/auth/signup');
      const expectedAction = [
        { type: types.MAKING_AUTH_REQUEST, bool: true },
        { type: types.SIGNUP_REQUEST_ERROR, error: undefined },
        { type: types.MAKING_AUTH_REQUEST, bool: false }
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.signup(mocks.testUser))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });
  });
});