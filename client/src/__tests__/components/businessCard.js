import React from "react";

import BusinessCard from '../../components/businessCard';

describe('All tests for business body component', () => {
 
  const props = {
    business: { 
        image: '',
        name: '',
        city: '',
        state: '',
        id: 0
    }
  };
  
    it('should be defined', () => {
      expect(BusinessCard).toBeDefined();
    });
    it('should render the card', () => {
      const { wrapper } = shallow(<BusinessCard {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
});
