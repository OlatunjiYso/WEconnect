import React from "react";

import UserBusiness from '../../components/userBusiness';

describe('All tests for user business card component', () => {
 
  const props = {
   userBusiness: {
    image:'', name: '', id:0,
    }
  };
  
    it('should be defined', () => {
      expect(UserBusiness).toBeDefined();
    });
    it('should render the business card', () => {
      const { wrapper } = shallow(<UserBusiness {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
});
