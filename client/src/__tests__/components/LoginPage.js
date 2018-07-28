import React from "react";
import { shallow, mount, render } from 'enzyme';

import LoginContainer from '../../containers/login';

describe('All tests for login page', () => {
  
  const initialState = {
    signupErrors: {},
    signinErrors: {},
    awaitingResponse: false,
    user: null,
    response: {}
};

  const store = mockStore(initialState);

  describe('it should render self', ()=>{
    it('it should render login page', () => {
      const wrapper = shallow(<Provider store={store}><LoginContainer /></Provider>);
      expect(wrapper.length).toEqual(1);
    });
  }) 
});
