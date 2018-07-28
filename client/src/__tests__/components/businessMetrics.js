import React from "react";

import BusinessMetrics from '../../components/businessMetrics';

describe('All tests for business metrics page component', () => {
  
    it('should be defined', () => {
      expect(BusinessMetrics).toBeDefined();
    });
    it('should render the banner', () => {
      const { wrapper } = shallow(<BusinessMetrics />);
      expect(wrapper).toMatchSnapshot();
    });
});
