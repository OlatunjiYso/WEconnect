import React from "react";
import { shallow } from 'enzyme';

import BusinessRegForm from '../../containers/business_reg_form';

describe('All tests for business reg container', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><BusinessRegForm/></Provider>);
  describe('it should render self', ()=>{
    it('it should render businessReg page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
