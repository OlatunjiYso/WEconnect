import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedBusinessUpdate, { BusinessUpdate } from '../../containers/business_update';

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
    match: {
      params: {
        businessId: 0
      }
    },
    initiateBusinessUpdate: jest.fn(() => Promise.resolve())
  };
  return shallow(<BusinessUpdate {...props} />);
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
      value: 'food'
    },
    preventDefault: () => ({})
  };
  const handleChange = jest.spyOn(wrapper.instance(), 'handleChange');
  action.handleChange(fakeEvent);
  expect(handleChange).toBeCalled();
  expect(action.state.business.category).toEqual('food');
});

describe('BusinessUpdate', () => {
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
      }
    });
    wrapper = shallow(<ConnectedBusinessUpdate store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
