import reducer from '../../reducers/authReducer';
import * as types from '../../actions/types';

describe('All tests for auth reducer', () => {
  it('sets the awaiting response ON', () => {
    const initialState = {
      awaitingResponse: false,
    };
    const action = {
      type: types.MAKING_AUTH_REQUEST,
      bool: true
    };
    const newState = reducer(initialState, action);
    expect(newState.awaitingResponse).toEqual(true);
  });
  it('sets the awaiting response OFF', () => {
    const initialState = {
      awaitingResponse: true
    };
    const action = {
      type: types.MAKING_AUTH_REQUEST,
      bool: false
    };
    const newState = reducer(initialState, action);
    expect(newState.awaitingResponse).toEqual(false);
  });
  it('should indicate signin error', () => {
    const initialState = {
      signinErrors: null
    };
    const action = {
      type: types.SIGNIN_REQUEST_ERROR,
      error: 20
    };
    const newState = reducer(initialState, action);
    expect(newState.signinErrors).toEqual(20);
  });
  it('should indicate signup error', () => {
    const initialState = {
      signupErrors: null
    };
    const action = {
      type: types.SIGNUP_REQUEST_ERROR,
      error: 40
    };
    const newState = reducer(initialState, action);
    expect(newState.signupErrors).toEqual(40);
  });
  it('should indicate signin success', () => {
    const initialState = {
      response: null
    };
    const action = {
      type: types.SIGNIN_REQUEST_SUCCESS,
      response: 'Yes'
    };
    const newState = reducer(initialState, action);
    expect(newState.response).toEqual('Yes');
  });
  it('should indicate signup success', () => {
    const initialState = {
      response: null
    };
    const action = {
      type: types.SIGNUP_REQUEST_SUCCESS,
      response: 'Yes'
    };
    const newState = reducer(initialState, action);
    expect(newState.response).toEqual('Yes');
  });
  it('should indicate onboarding success', () => {
    const initialState = {
      response: null
    };
    const action = {
      type: types.ON_BOARDING_SUCCESS,
      response: 'Onboarded Yes'
    };
    const newState = reducer(initialState, action);
    expect(newState.response).toEqual('Onboarded Yes');
  });
  it('should set current user', () => {
    const initialState = {
      user: null
    };
    const action = {
      type: types.SET_CURRENT_USER,
      user: 'John Dope'
    };
    const newState = reducer(initialState, action);
    expect(newState.user).toEqual('John Dope');
  });
});

