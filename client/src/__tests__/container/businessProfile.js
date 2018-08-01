import React from "react";
import { shallow, mount, render } from 'enzyme';

import BusinessProfile from '../../containers/business_profile';

describe('All tests for businessProfile contain', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><BusinessProfile/></Provider>);
  describe('it should render self', ()=>{
    it('it should render login page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
