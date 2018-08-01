import React from "react";
import { shallow } from 'enzyme';

import ReviewForm from '../../containers/review_form';

describe('All tests for review form', () => {
  
  const initialState = {};

  const store = mockStore(initialState);
  const wrapper = shallow(<Provider store={store}><ReviewForm/></Provider>);
  describe('it should render self', ()=>{
    it('it should render review form', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  }); 
});
