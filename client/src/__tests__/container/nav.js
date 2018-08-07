import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedNav from '../../containers/review_form';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let wrapper;

describe('Nav bar', () => {
  it('it should render the component successfully', () => {
    const store = mockStore({
      authReducers: {
        signupErrors: {},
        signinErrors: {},
        awaitingResponse: false,
        user: null,
        response: {}
      }
    });
    wrapper = shallow(<ConnectedNav store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
