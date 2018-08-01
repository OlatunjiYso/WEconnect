import reducer from '../../reducers/userReducer';
import * as types from '../../actions/types';

describe('all tests for review reducer', () => {
  it('sets the awiting response', () => {
    const initialState = {
      awaitingResponse: false
    };
    const bool = true;
    const action = {
      type: types.USER_UPDATE_REQUEST,
      bool
    };
    const newState = reducer(initialState, action);
    expect(newState.awaitingResponse).toEqual(true);
  });
  it('updayte store with user updates', () => {
    const initialState = {
      errors: 0
    };
    const action = {
      type: types.USER_UPDATE_ERROR,
      error: 1
    };
    const newState = reducer(initialState, action);
    expect(newState.errors).toEqual(1);
  });
  it('update store with user updates', () => {
    const initialState = {
      errors: 0,
      response: null
    };
    const action = {
      type: types.USER_UPDATE_SUCCESS,
      response: 'new response'
    };
    const newState = reducer(initialState, action);
    expect(newState.response).toEqual('new response');
    expect(newState.errors).toEqual({});
  });
});
