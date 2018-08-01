import React from "react";
import { shallow } from 'enzyme';

import Nav from '../../containers/nav';

describe('All tests for Nav', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><Nav/></Provider>);
  describe('it should render self', ()=>{
    it('it should render Nav', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
