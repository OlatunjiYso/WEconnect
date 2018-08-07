import reducer from '../../reducers/reviewReducer';
import * as types from '../../actions/types';

describe('all tests for review reducer', () => {
  it('sets the awiting response', () => {
    const initialState = {
      awaitingResponse: false
    };
    const bool = true;
    const action = {
      type: types.MAKING_REVIEW_REQUEST,
      bool
    };
    const newState = reducer(initialState, action);
    expect(newState.awaitingResponse).toEqual(true);
  });
  it('sets updates the store with reviews', () => {
    const initialState = {
      reviews: []
    };
    const action = {
      type: types.GET_ALL_REVIEW,
      reviews: 9
    };
    const newState = reducer(initialState, action);
    expect(newState.reviews).toEqual(9);
  });
  it('sets updates the store completion status', () => {
    const initialState = {
      response: []
    };
    const action = {
      type: types.REVIEW_SUCCESS,
      response: 29
    };
    const newState = reducer(initialState, action);
    expect(newState.response).toEqual(29);
  });
  it('indicates review errors', () => {
    const initialState = {
      reviewErrors: []
    };
    const action = {
      type: types.REVIEW_ERROR,
      error: null
    };
    const newState = reducer(initialState, action);
    expect(newState.reviewErrors).toEqual(null);
  });
  it('specifies editable reviews', () => {
    const initialState = {
      editingIndex: 0
    };
    const action = {
      type: types.MAKE_REVIEW_EDITABLE,
      id: 1
    };
    const newState = reducer(initialState, action);
    expect(newState.editingIndex).toEqual(1);
  });
});
