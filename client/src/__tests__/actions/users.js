import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/user';
import * as types from '../../actions/types';
import * as mocks from '../../mocks/user';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('All tests for sync user actions', () => {
  it('should signal request is being made', () => {
    const expectedAction = {
      type: types.USER_UPDATE_REQUEST,
      bool: true
    };
    expect(actions.isRequesting(true)).toEqual(expectedAction);
  });
  it('should signal request is over', () => {
    const expectedAction = {
      type: types.USER_UPDATE_REQUEST,
      bool: false
    };
    expect(actions.isRequesting(false)).toEqual(expectedAction);
  });
  it('should indicate user errror', () => {
    const err = {};
    const expectedAction = {
      type: types.USER_UPDATE_ERROR,
      error: {}
    };
    expect(actions.errorResponse(err)).toEqual(expectedAction);
  });
  it('should indicate success', () => {
    const message = 'msg';
    const expectedAction = {
      type: types.USER_UPDATE_SUCCESS,
      response: 'msg'
    };
    expect(actions.success(message)).toEqual(expectedAction);
  });
  it('should set current user', () => {
    const user = {};
    const expectedAction = {
      type: types.SET_CURRENT_USER,
      user
    };
    expect(actions.setCurrentUser(user)).toEqual(expectedAction);
  });
});

describe('All test for asyncronous user actions', () => {
  const rootUrl = '/api/v1/auth';
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('it should fire the actions for changing password', () => {
    moxios.stubRequest(`${rootUrl}/passwords`, mocks.userUpdateResponse);
    const passwords = {};
      const expectedAction = [
        { type: types.USER_UPDATE_REQUEST, bool: true },
        { type: types.USER_UPDATE_REQUEST, bool: false }
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.changePassword(passwords))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('it should fire the actions for NOT changing password', () => {
    moxios.stubRequest(`${rootUrl}/passwords`, mocks.userErrorResponse);
      const expectedAction = [
        { type: types.USER_UPDATE_REQUEST, bool: true },
        { type: types.USER_UPDATE_REQUEST, bool: false }
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.changePassword(mocks.testUser))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('it should fire the actions for NOT changing details', () => {
    const userId = 1;
    const details = {};
    moxios.stubRequest(`${rootUrl}/profile/${userId}`, mocks.userErrorResponse);
      const expectedAction = [
        { type: types.USER_UPDATE_REQUEST, bool: true },
        { type: types.USER_UPDATE_ERROR, error: {} },
        { type: types.USER_UPDATE_REQUEST, bool: false }
      ];
      const store = mockStore({ authData: {} });
      return store.dispatch(actions.changeDetails(userId, details))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
});