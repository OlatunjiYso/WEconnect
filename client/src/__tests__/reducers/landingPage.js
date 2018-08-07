import reducer from '../../reducers/landingPageReducer';
import * as types from '../../actions/types';

describe('all tests for review reducer', () => {
  it('should store category in state', () => {
    const initialState = {
      landingPageFilter: {
        category: null
      }
    };
    const action = {
      type: types.SET_CATEGORY,
      category: 'fashion'
    };
    const newState = reducer(initialState, action);
    expect(newState.landingPageFilter.category).toEqual('fashion');
  });
  it('should remove category from state', () => {
    const initialState = {
      landingPageFilter: {
        category: 'all'
      }
    };
    const action = {
      type: types.CLEAR_CATEGORY,
      category: null
    };
    const newState = reducer(initialState, action);
    expect(newState.landingPageFilter.category).toEqual(null);
  });
});
