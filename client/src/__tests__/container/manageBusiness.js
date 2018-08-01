import React from "react";
import { shallow } from 'enzyme';

import ManageBusiness from '../../containers/manage_business';

describe('All tests for manage business page', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><ManageBusiness/></Provider>);
  describe('it should render self', ()=>{
    it('it should render manage business page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
