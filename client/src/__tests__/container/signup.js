import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedSignup, { Signup } from '../../containers/signup';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let props;
const setup = () => {
  props = {
    data: {
      signupErrors: {},
      signinErrors: {},
      awaitingResponse: false,
      user: null,
      response: {}
    },
    signup: jest.fn(() => Promise.resolve())
  };
  return shallow(<Signup {...props} />);
}

let wrapper = setup();
const action = wrapper.instance();

describe('handleSubmit', () => {
  const fakeEvent = { preventDefault: () => ({}) };
  it('should submit signup user', () => {
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
  expect(action.state.userDetail.username).toEqual('olat');
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
    });
    wrapper = shallow(<ConnectedSignup store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
