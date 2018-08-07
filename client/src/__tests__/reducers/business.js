import reducer from '../../reducers/businessReducer';
import * as types from '../../actions/types';

describe('Review reducer', () => {
  it('sets the awiting response', () => {
    const initialState = {
      awaitingResponse: false
    };
    const bool = true;
    const action = {
      type: types.MAKING_BUSINESS_REQUEST,
      bool
    };
    const newState = reducer(initialState, action);
    expect(newState.awaitingResponse).toEqual(true);
  });
  it('should update store with newly fetched businesses', () => {
    const initialState = {
      Businesses: [],
      filter: {},
      pages: null
    };
    const newBusiness = [1, 2, 3, 4, 5];
    const newFilter = { a: 1, b: 2 };
    const pages = 10;

    const action = {
      type: types.FETCH_BUSINESSES_SUCCESS,
      allBusinesses: newBusiness,
      pages,
      selectedFilter: newFilter
    };
    const newState = reducer(initialState, action);
    expect(newState.pages).toEqual(10);
    expect(newState.filter).toEqual(newFilter);
    expect(newState.businesses).toEqual(newBusiness);
  });
  it('should update store with newly fetched business', () => {
    const initialState = {
      business: {},
      myReviews: []
    };
    const reviews = [1, 2, 3, 4];
    const business = { one: 111, two: 123 };
    const action = {
      type: types.FETCH_BUSINESS_SUCCESS,
      business,
      reviews
    };
    const newState = reducer(initialState, action);
    expect(newState.myReviews).toEqual(reviews);
    expect(newState.business).toEqual(business);
  });
  it('should indicate business not fetched', () => {
    const initialState = {
      errors: null,
      businesses: null,
      filter: null,
    };
    const action = {
      type: types.FETCH_BUSINESS_FAILED,
      error: {},
      business: {},
      filter: {}
    };
    const newState = reducer(initialState, action);
    expect(newState.errors).toEqual({});
    expect(newState.businesses).toEqual({});
    expect(newState.filter).toEqual({});
  });
  it('should update store with my business', () => {
    const initialState = {
      myBusinesses: null
    };
    const action = {
      type: types.FIND_MY_BUSINESSES_SUCCESS,
      businesses: 12
    };
    const newState = reducer(initialState, action);
    expect(newState.myBusinesses).toEqual(12);
  });
  it('indicate business reg error', () => {
    const initialState = {
      errors: null
    };
    const actions = {
      type: types.REGISTER_BUSINESS_FAILED,
      error: 'business err'
    };
    const newState = reducer(initialState, actions);
    expect(newState.errors).toEqual('business err');
  });
  it('should indicate business update error', () => {
    const initialState = {
      errors: 0
    };
    const action = {
      type: types.UPDATE_BUSINESS_FAILED,
      error: 25
    };
    const newState = reducer(initialState, action);
    expect(newState.errors).toEqual(25);
  });
  it('should indicate business delete error', () => {
    const initialState = {
      errors: 1
    };
    const action = {
      type: types.DELETE_BUSINESS_FAILED,
      error: 12
    };
    const newState = reducer(initialState, action);
    expect(newState.errors).toEqual(12);
  });
});