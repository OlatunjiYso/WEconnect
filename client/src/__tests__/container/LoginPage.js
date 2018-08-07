import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedLogin, { Login } from '../../containers/login';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


let props;
let context;
const setup = () => {
  props = {
    data: {
      signupErrors: {},
      signinErrors: {},
      awaitingResponse: false,
      user: null,
      response: {}
    },
    login: jest.fn(() => Promise.resolve())
  };
  return shallow(<Login {...props} />);
}

let wrapper = setup();
const action = wrapper.instance();

describe('handleSubmit', () => {
  const fakeEvent = { preventDefault: () => ({}) };
  it('should sign up new user', () => {
    const handleSubmit = jest.spyOn(wrapper.instance(), 'handleSubmit');
    action.handleSubmit(fakeEvent);
    expect(handleSubmit).toBeCalled();
  });
})

describe('handleChange', () => {
  const fakeEvent = {
    target: {
      name: 'username',
      value: 'olat'
    },
    preventDefault: () => ({})
  };
  const handleChange = jest.spyOn(wrapper.instance(), 'handleChange');
  action.handleChange(fakeEvent);
  expect(handleChange).toBeCalled();
  expect(action.state.userDetails.username).toEqual('olat');
});


describe('All businesses', () => {
  it('it should render the component successfully', () => {
    const store = mockStore({
      authReducers: {
        signupErrors: {},
        signinErrors: {},
        awaitingResponse: false,
        user: null,
        response: {}
      },
      landingPageReducer: {
        category: null,
        state: 'location'
      }
    });
    wrapper = shallow(<ConnectedLogin store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
