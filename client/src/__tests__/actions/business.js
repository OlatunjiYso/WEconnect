import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/business';
import * as types from '../../actions/types';
import * as mocks from '../../mocks/business';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('All Tests for syncronous business actions', () => {
  it('should set the desired business category', () => {
    const chosenCategory = 'fashion';
    const expectedAction = {
      type: types.SET_CATEGORY,
      category: chosenCategory
    };
    expect(actions.setCategory(chosenCategory)).toEqual(expectedAction);
  });
  it('should signal that a request is being made', () => {
    const expectedAction = {
      type: types.MAKING_BUSINESS_REQUEST,
      bool: true
    };
    expect(actions.isRequesting(true)).toEqual(expectedAction);
  });
  it('should signal that a request has stopped', () => {
    const expectedAction = {
      type: types.MAKING_BUSINESS_REQUEST,
      bool: false
    };
    expect(actions.isRequesting(false)).toEqual(expectedAction);
  });
  it('should be able to clear category', () => {
    const expectedAction = {
      type: types.CLEAR_CATEGORY,
      category: null
    };
    expect(actions.clearCategory()).toEqual(expectedAction);
  });
  it('should indicate that all businesses was fetched', () => {
    const allBusinesses = [];
    const filterUsed = {};
    const pages = 0;
    const expectedAction = {
      type: types.FETCH_BUSINESSES_SUCCESS,
      allBusinesses,
      selectedFilter: filterUsed,
      pages
    };
    expect(actions.getAllBusinessesSuccess(allBusinesses, filterUsed, pages)).toEqual(expectedAction);
  });
  it('should indicate that a business was fetched', () => {
    const business = { Reviews: 'r' };
    const expectedAction = {
      type: types.FETCH_BUSINESS_SUCCESS,
      business,
      reviews: 'r'
    };
    expect(actions.getBusinessSuccess(business)).toEqual(expectedAction);
  });
  it('should indicate that a user businesses was fetched', () => {
    const businesses = [];
    const expectedAction = {
      type: types.FIND_MY_BUSINESSES_SUCCESS,
      businesses
    };
    expect(actions.getMyBusinessesSuccess(businesses)).toEqual(expectedAction);
  });
  it('should indicate that a user businesses is not found', () => {
    const error = 'err';
    const filter = {};
    const expectedAction = {
      type: types.FETCH_BUSINESS_FAILED,
      business: [],
      error: 'err',
      filter: {}
    };
    expect(actions.businessNotFound(error, filter)).toEqual(expectedAction);
  });
  it('should indicate that business was not registered', () => {
    const errors = [];
    const expectedAction = {
      type: types.REGISTER_BUSINESS_FAILED,
      error: [],
    };
    expect(actions.registerBusinessFailure(errors)).toEqual(expectedAction);
  });
  it('should indicate that business was not updated', () => {
    const errors = [];
    const expectedAction = {
      type: types.UPDATE_BUSINESS_FAILED,
      error: [],
    };
    expect(actions.updateBusinessFailure(errors)).toEqual(expectedAction);
  });
  it('should indicate that business was not deleted', () => {
    const errors = ['k'];
    const expectedAction = {
      type: types.DELETE_BUSINESS_FAILED,
      error: ['k'],
    };
    expect(actions.deleteBusinessFailure(errors)).toEqual(expectedAction);
  });
});

describe('all tests for asynchronuos tests', () => {
  const rootUrl = 'api/v1/businesses';
  global.localStorage = {
    getItem: val => val,
    setItem: (key, value) => key || value
  };
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
    const pageNumber = 0;
    const filter = {
      state: '',
      category: ''
    };
    it('should dispatch the All business fetching actions', () => {
      moxios.stubRequest(
        `${rootUrl}?category=${filter.category}&&location=${filter.state}&&page=${pageNumber}`,
         mocks.fetchAllBusinessesResponse
        );
      const expectedAction = [
        {
          type: types.FETCH_BUSINESSES_SUCCESS,
          allBusinesses: [],
          selectedFilter: filter,
          pages: 0
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.fetchAllBusinesses(filter, 0))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the Allbusiness NOT fetched actions', () => {
      moxios.stubRequest(`${rootUrl}?category=${filter.category}&&location=${filter.state}&&page=${pageNumber}`);
      const expectedAction = [
        {
          type: types.FETCH_BUSINESS_FAILED,
          error: undefined,
          filter,
          business: []
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.fetchAllBusinesses(filter, 0))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for fetching a business', () => {
      const businessId = 0;
      moxios.stubRequest(
       `${rootUrl}/${businessId}`,
         mocks.fetchOneBusinessResponse
        );
      const expectedAction = [
        {
          type: types.FETCH_BUSINESS_SUCCESS,
          business: { Reviews: [] },
          reviews: []
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.fetchThisBusiness(businessId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for NOT fetching a business', () => {
      const businessId = 0;
      moxios.stubRequest(`${rootUrl}/${businessId}`);
      const expectedAction = [
        {
          type: types.FETCH_BUSINESS_FAILED,
          error: undefined,
          filter: undefined,
          business: []
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.fetchThisBusiness(businessId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for fetching user businesses', () => {
      moxios.stubRequest(
        '/api/v1/auth/myBusiness',
        mocks.fetchMyBusinessesResponse
      );
      const expectedAction = [
        {
          type: types.FIND_MY_BUSINESSES_SUCCESS,
          businesses: []
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.fetchMyBusinesses())
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for registering a businesses', () => {
      const cloudImageUrl = 'url';
      const business = {};
      moxios.stubRequest(
        `${rootUrl}/`,
        mocks.registerBusinessResponse
      );
      const expectedAction = [
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.registerBusiness(cloudImageUrl, business))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for NOT registering a businesses', () => {
      const cloudImageUrl = 'url';
      const business = {};
      moxios.stubRequest(`${rootUrl}/`);
      const expectedAction = [
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        },
        {
          type: types.REGISTER_BUSINESS_FAILED,
          error: undefined
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.registerBusiness(cloudImageUrl, business))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions intiating business registration', () => {
      const { image } = mocks;
      const business = {};
      moxios.stubRequest(
        `${rootUrl}/`,
        mocks.registerBusinessResponse
      );
      moxios.stubRequest(mocks.image.url, mocks.initiateBusinessRegResponse);
      const expectedAction = [
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.initiateBusinessRegistration(image, business))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for updating a businesses', () => {
      const businessId = 0;
      const business = {};
      moxios.stubRequest(
        `${rootUrl}/${businessId}`,
        mocks.updateBusinessResponse
      );
      const expectedAction = [
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.updateBusiness(businessId, business))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for NOT updating a businesses', () => {
      const businessId = 0;
      const business = {};
      moxios.stubRequest(`${rootUrl}/${businessId}`);
      const expectedAction = [
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        },
        {
          type: types.UPDATE_BUSINESS_FAILED,
          error: undefined
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.updateBusiness(businessId, business))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for Not intiating businesses update', () => {
      const { image } = mocks;
      const business = { image: {}, id: 0 };
      moxios.stubRequest(mocks.image.url);
      const expectedAction = [
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.initiateBusinessUpdate(image, business))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for deleting a businesses', () => {
      const businessId = 1;
      const pass = { data: {} };
      moxios.stubRequest(
        `${rootUrl}/${businessId}`,
        mocks.deleteBusinessResponse
      );
      const expectedAction = [
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.deleteBusiness(pass, businessId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    it('should dispatch the actions for NOT deleting a businesses', () => {
      const businessId = 0;
      const pass = {};
      moxios.stubRequest(`${rootUrl}/${businessId}`);
      const expectedAction = [
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: true
        },
        {
          type: types.MAKING_BUSINESS_REQUEST,
          bool: false
        },
        {
          type: types.DELETE_BUSINESS_FAILED,
          error: undefined
        }
      ];
      const store = mockStore({ businessData: {} });
      return store.dispatch(actions.deleteBusiness(pass, businessId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
});