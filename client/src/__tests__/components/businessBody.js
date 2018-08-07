import React from "react";

import BusinessBody from '../../components/businessBody';

describe('All tests for business body component', () => {
 
  const props = {
    business: {
        address: "",
        about: "",
        city: "",
        state: "",
        phone: "",
        email: ""
    }
  };
  
    it('should be defined', () => {
      expect(BusinessBody).toBeDefined();
    });
    it('should render the body', () => {
      const { wrapper } = shallow(<BusinessBody {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
});
