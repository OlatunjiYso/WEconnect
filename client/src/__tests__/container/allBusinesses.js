import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedBusinesses, { AllBusinesses } from '../../containers/all_businesses';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


let props;
const setup = () => {
  props = {
    businessData: {
      businesses: [],
      business: {},
      filter: { state: 'location', category: 'category' },
      myReviews: [],
      myBusinesses: [],
      errors: {},
      awaitingResponse: false,
      notFound: false,
      pages: 1
    },
    landingPageData: {
      landingPageFilter: {
        category: null,
        state: 'location'
      }
    },
    fetchAllBusinesses: jest.fn(() => Promise.resolve())
  };
  return shallow(<AllBusinesses {...props} />);
}

let wrapper = setup();
const action = wrapper.instance();
describe('componentWillMount()', () => {
  it('should call componentWillMount()', () => {
    const willMount = jest.spyOn(wrapper.instance(), 'componentWillMount');
    action.componentWillMount();
    expect(willMount).toBeCalled();
  });
});

describe('handleSubmit', () => {
  const fakeEvent = { preventDefault: () => ({}) };
  it('should submit search information', () => {
    const handleSubmit = jest.spyOn(wrapper.instance(), 'handleSubmit');
    action.handleSubmit(fakeEvent);
    expect(handleSubmit).toBeCalled();
  });
})

describe('handleChange', () => {
  const fakeEvent = {
    target: {
      name: 'state',
      value: 'lagos'
    },
    preventDefault: () => ({})
  };
  const handleChange = jest.spyOn(wrapper.instance(), 'handleChange');
  action.handleChange(fakeEvent);
  expect(handleChange).toBeCalled();
  expect(action.state.filter.state).toEqual('lagos');
});

describe('onSelectPagination', () => {
  it('should submit search information', () => {
    const paginate = jest.spyOn(wrapper.instance(), 'onSelectPagination');
    action.onSelectPagination(1);
    expect(paginate).toBeCalled();
  });
})


describe('All businesses', () => {
  it('it should render the component successfully', () => {
    const store = mockStore({
      businessReducer: {
        businesses: [],
        business: {},
        filter: { state: 'location', category: 'category' },
        myReviews: [],
        myBusinesses: [],
        errors: {},
        awaitingResponse: false,
        notFound: false,
        pages: 1
      },
      landingPageReducer: {
        category: null,
        state: 'location'
      }
    });
    wrapper = shallow(<ConnectedBusinesses store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
