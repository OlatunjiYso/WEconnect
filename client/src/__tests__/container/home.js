import React from "react";
import { shallow } from 'enzyme';

import Home from '../../containers/home';

describe('All tests for login page', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><Home/></Provider>);
  describe('it should render self', ()=>{
    it('it should render home page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
