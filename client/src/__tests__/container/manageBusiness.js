import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedManageBusiness, { ManageBusiness } from '../../containers/manage_business';

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
    fetchThisBusiness: jest.fn(() => Promise.resolve())
  };
  return shallow(<ManageBusiness {...props} />);
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
      }
    });
    wrapper = shallow(<ConnectedManageBusiness store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
