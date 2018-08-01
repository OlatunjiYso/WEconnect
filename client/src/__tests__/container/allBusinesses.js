import React from "react";
import { shallow } from 'enzyme';

import AllBusinesses from '../../containers/all_businesses';

describe('All tests for allBusinesses page', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><AllBusinesses/></Provider>);
  describe('it should render self', ()=>{
    it('it should render all businesses page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
