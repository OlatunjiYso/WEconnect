import React from "react";

import BusinessBanner from '../../components/businessBanner';

describe('All tests for business banner component', () => {
 
  const props = {
    business: {
      name: '',
      image: ''
    }
  };
  
    it('should be defined', () => {
      expect(BusinessBanner).toBeDefined();
    });
    it('should render the banner', () => {
      const { wrapper } = shallow(<BusinessBanner {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
});
