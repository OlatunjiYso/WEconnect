import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedProfileUpdate, { ProfileUpdate } from '../../containers/profileUpdate';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


let props;
const setup = () => {
  props = {
    userData: {
      user: {
          id: 0
      }
    },
    data: {
      awaitingResponse: null,
      response: null
    },
    changeDetails: jest.fn(() => Promise.resolve()),
    changePassword: jest.fn(() => Promise.resolve())
  };
  return shallow(<ProfileUpdate {...props} />);
}

let wrapper = setup();
const action = wrapper.instance();

describe('switchForm', () => {
  const fakeEvent = { preventDefault: () => ({}) };
  it('should switch forms', () => {
    const switchForm = jest.spyOn(wrapper.instance(), 'switchForm');
    action.switchForm(fakeEvent);
    expect(switchForm).toBeCalled();
  });
})

describe('submitDetails', () => {
  const fakeEvent = { preventDefault: () => ({}) };
  it('should submit details', () => {
    const submitDetails = jest.spyOn(wrapper.instance(), 'submitDetails');
    action.submitDetails(fakeEvent);
    expect(submitDetails).toBeCalled();
  });
})

describe('submitPassword', () => {
  const fakeEvent = { preventDefault: () => ({}) };
  it('should submit passwords', () => {
    const submitPassword = jest.spyOn(wrapper.instance(), 'submitPassword');
    action.submitPassword(fakeEvent);
    expect(submitPassword).toBeCalled();
  });
})

describe('handleChange', () => {
  const fakeEvent = {
    target: {
      name: 'email',
      value: 'xyz'
    },
    preventDefault: () => ({})
  };
  const handleChange = jest.spyOn(wrapper.instance(), 'handleChange');
  action.handleChange(fakeEvent);
  expect(handleChange).toBeCalled();
  expect(action.state.updated.email).toEqual('xyz');
});


describe('All businesses', () => {
  it('it should render the component successfully', () => {
    const store = mockStore({
      userReducer: {
      },
      authReducers: {
        category: null,
        state: 'location'
      }
    });
    wrapper = shallow(<ConnectedProfileUpdate store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
