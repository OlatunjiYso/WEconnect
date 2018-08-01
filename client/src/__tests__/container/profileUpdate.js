import React from "react";
import { shallow } from 'enzyme';

import ProfileUpdate from '../../containers/profileUpdate';

describe('All tests for profile update page', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><ProfileUpdate/></Provider>);
  describe('it should render self', ()=>{
    it('it should render profile update', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
