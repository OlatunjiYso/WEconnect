import React from "react";
import { shallow, mount, render } from 'enzyme';

import BusinessUpdate from '../../containers/business_update';

describe('All tests for login page', () => {
  
  const initialState = {};
  const footer = {};
  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><BusinessUpdate/></Provider>);
  describe('it should render self', ()=>{
    it('it should render business update page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
