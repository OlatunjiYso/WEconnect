import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/review';
import * as types from '../../actions/types';
import * as mocks from '../../mocks/review';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('All tests for sync review actions', () => {
  it('should signal a request is running', () => {
    const expectedAction = {
      type: types.MAKING_REVIEW_REQUEST,
      bool: true
    };
    expect(actions.isRequesting(true)).toEqual(expectedAction);
  });
  it('should signal a request has stopped', () => {
    const expectedAction = {
      type: types.MAKING_REVIEW_REQUEST,
      bool: false
    };
    expect(actions.isRequesting(false)).toEqual(expectedAction);
  });
  it('should send review-success action', () => {
    const res = {};
    const expectedAction = {
      type: types.REVIEW_SUCCESS,
      response: {}
    };
    expect(actions.reviewSuccess(res)).toEqual(expectedAction);
  });
  it('should signal fetching all review', () => {
    const reviews = [];
    const expectedAction = {
      type: types.GET_ALL_REVIEW,
      reviews
    };
    expect(actions.getAllBusinessReview(reviews)).toEqual(expectedAction);
  });
  it('should make a review editable', () => {
    const id = 5;
    const expectedAction = {
      type: types.MAKE_REVIEW_EDITABLE,
      id
    };
    expect(actions.makeEditable(id)).toEqual(expectedAction);
  });
  it('should signal reveiw errror', () => {
    const error = {};
    const expectedAction = {
      type: types.REVIEW_ERROR,
      error
    };
    expect(actions.reviewError(error)).toEqual(expectedAction);
  });
});

// Asyncronuos review actions Asyncronuos review actions Asyncronuos //

describe('All tests for asynchronous review actions', () => {
  const rootUrl = 'api/v1/businesses';
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('it fires the actions for getting all reviews', () => {
    const businessId = 0;
    moxios.stubRequest(`${rootUrl}/${businessId}/reviews`, mocks.getReviewResponse);
    const expectedAction = [
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
      { type: types.MAKING_REVIEW_REQUEST, bool: false },
      { type: types.GET_ALL_REVIEW, reviews: [1, 3, 5] }
    ];
    const store = mockStore({ reviewData: {} });
      return store.dispatch(actions.getAllReviews(businessId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('should fire the actions for Not getting all reviews', () => {
    const businessId = 0;
    moxios.stubRequest(`${rootUrl}/${businessId}/reviews`, mocks.reviewError);
    const expectedAction = [
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
      { type: types.MAKING_REVIEW_REQUEST, bool: false },
      { type: types.REVIEW_ERROR, error: undefined }
    ];
    const store = mockStore({ reviewData: {} });
      return store.dispatch(actions.getAllReviews(businessId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('should fire the actions for posting a review', () => {
    const businessId = 0;
    const review = {};
    moxios.stubRequest(`${rootUrl}/${businessId}/reviews`, mocks.getReviewResponse);
    const expectedAction = [
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
      { type: types.MAKING_REVIEW_REQUEST, bool: false },
      { type: types.REVIEW_SUCCESS, response: { reviews: [1, 3, 5] } },
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
    ];
    const store = mockStore({ reviewData: {} });
      return store.dispatch(actions.postReview(businessId, review))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('should fire the actions for NOT posting a review', () => {
    const businessId = 0;
    const review = {};
    moxios.stubRequest(`${rootUrl}/${businessId}/reviews`, mocks.reviewError);
    const expectedAction = [
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
      { type: types.MAKING_REVIEW_REQUEST, bool: false },
      { type: types.REVIEW_ERROR, error: 400 }
    ];
    const store = mockStore({ reviewData: {} });
      return store.dispatch(actions.postReview(businessId, review))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('should fire the actions for updating a review', () => {
    const businessId = 0;
    const newReview = {};
    const reviewId = 0;
    moxios.stubRequest(
      `${rootUrl}/${businessId}/reviews/${reviewId}`,
       mocks.getReviewResponse
      );
    const expectedAction = [
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
      { type: types.MAKING_REVIEW_REQUEST, bool: false },
      { type: types.REVIEW_SUCCESS, response: { reviews: [1, 3, 5] } },
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
    ];
    const store = mockStore({ reviewData: {} });
      return store.dispatch(actions.updateReview(businessId, reviewId, newReview))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('should fire the actions for NOT updating a review', () => {
    const businessId = 0;
    const newReview = {};
    const reviewId = 0;
    moxios.stubRequest(`${rootUrl}/${businessId}/reviews/${reviewId}`);
    const expectedAction = [
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
      { type: types.MAKING_REVIEW_REQUEST, bool: false },
      { type: types.REVIEW_ERROR, error: undefined },
    ];
    const store = mockStore({ reviewData: {} });
      return store.dispatch(actions.updateReview(businessId, reviewId, newReview))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('should fire the actions for deleting a review', () => {
    const businessId = 0;
    const reviewId = 0;
    moxios.stubRequest(
      `${rootUrl}/${businessId}/reviews/${reviewId}`,
       mocks.getReviewResponse
      );
    const expectedAction = [
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
      { type: types.MAKING_REVIEW_REQUEST, bool: false },
      { type: types.REVIEW_SUCCESS, response: { reviews: [1, 3, 5] } },
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
    ];
    const store = mockStore({ reviewData: {} });
      return store.dispatch(actions.deleteReview(businessId, reviewId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
  it('should fire the actions for NOT deleting a review', () => {
    const businessId = 0;
    const reviewId = 0;
    moxios.stubRequest(
      `${rootUrl}/${businessId}/reviews/${reviewId}`,
       mocks.getReviewResponseKKK
      );
    const expectedAction = [
      { type: types.MAKING_REVIEW_REQUEST, bool: true },
      { type: types.MAKING_REVIEW_REQUEST, bool: false },
      { type: types.REVIEW_ERROR, error: undefined }
    ];
    const store = mockStore({ reviewData: {} });
      return store.dispatch(actions.deleteReview(businessId, reviewId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
  });
});