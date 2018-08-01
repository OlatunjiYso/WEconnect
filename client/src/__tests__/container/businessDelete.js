import React from "react";
import { shallow, mount, render } from 'enzyme';

import BusinessDelete from '../../containers/delete_business';

describe('All tests for business delete page', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><BusinessDelete/></Provider>);
  describe('it should render self', ()=>{
    it('it should render business delete page', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
