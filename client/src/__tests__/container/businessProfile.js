import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedBusinessProfile, { BusinessProfile } from '../../containers/business_profile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


let props;
const setup = () => {
  props = {
    businessData: {
      businesses: [],
      business: {},
    },
    match: {
      params: {
        id: 0
      }
    },
    fetchThisBusiness: jest.fn(() => Promise.resolve())
  };
  return shallow(<BusinessProfile {...props} />);
}

let wrapper = setup();
const action = wrapper.instance();
describe('componentDidMount()', () => {
  it('should call componentDidMount()', () => {
    const didMount = jest.spyOn(wrapper.instance(), 'componentDidMount');
    action.componentDidMount();
    expect(didMount).toBeCalled();
  });
});

describe('Business Profile', () => {
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
    wrapper = shallow(<ConnectedBusinessProfile store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
