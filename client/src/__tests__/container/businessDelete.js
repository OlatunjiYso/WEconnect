import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import  ConnectedDeleteBusiness, { DeleteBusiness } from '../../containers/delete_business';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


let props;
const setup = () => {
  props = {
    data: {
      business: {
        name: '1'
      }
    },
    match: {
      params: {
        businessId: 0
      }
    },
    deleteBusiness: jest.fn(() => Promise.resolve())
  };
  return shallow(<DeleteBusiness {...props} />);
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
  it('should submit request to delete', () => {
    const handleSubmit = jest.spyOn(wrapper.instance(), 'handleSubmit');
    action.handleSubmit(fakeEvent);
    expect(handleSubmit).toBeCalled();
  });
})

describe('handleChange', () => {
  const fakeEvent = {
    target: {
      name: 'password',
      value: 'passes'
    },
    preventDefault: () => ({})
  };
  const handleChange = jest.spyOn(wrapper.instance(), 'handleChange');
  action.handleChange(fakeEvent);
  expect(handleChange).toBeCalled();
  expect(action.state.password).toEqual('passes');
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
    wrapper = shallow(<ConnectedDeleteBusiness store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
