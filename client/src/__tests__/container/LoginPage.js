import React from "react";
import { shallow, mount, render } from 'enzyme';

import LoginContainer from '../../containers/login';

describe('All tests for login page', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><LoginContainer/></Provider>);
  describe('it should render self', ()=>{
    it('it should render login page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
