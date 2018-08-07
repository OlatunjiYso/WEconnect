import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedBusinessForm, { BusinessRegForm } from '../../containers/business_reg_form';
import BusinessApi from '../../service/businessApi';

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
    initiateBusinessRegistration: jest.fn(() => Promise.resolve())
  };
  return shallow(<BusinessRegForm {...props} />);
}

let wrapper = setup();
const action = wrapper.instance();

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
      name: 'category',
      value: 'book'
    },
    preventDefault: () => ({})
  };
  const handleChange = jest.spyOn(wrapper.instance(), 'handleChange');
  action.handleChange(fakeEvent);
  expect(handleChange).toBeCalled();
  expect(action.state.business.category).toEqual('book');
});

describe('imageChange', () => {
  const fakeEvent = {
    target: {
      image: 0
    },
    preventDefault: () => ({})
  };
  it('should submit image', () => {
    const handleImage = jest.spyOn(wrapper.instance(), 'handleImageChange');
    action.handleImageChange(fakeEvent);
    expect(handleImage).toBeCalled();
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
    wrapper = shallow(<ConnectedBusinessForm store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
