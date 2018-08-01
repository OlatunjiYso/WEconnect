import React from "react";
import { shallow } from 'enzyme';

import UserProfile from '../../containers/user_profile';

describe('All tests for user profile page', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><UserProfile/></Provider>);
  describe('it should render self', ()=>{
    it('it should render user profile page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
