import React from "react";

import BusinessCatalogTop from '../../components/businessCatalogTop';

describe('All tests for business body component', () => {
 
  const props = {
    proposedFilter: {},
    selectedFilter: {},
    handleChange: ()=> {},
    handleSubmit: ()=> {},
    businessList: [],
  };
  
    it('should be defined', () => {
      expect(BusinessCatalogTop).toBeDefined();
    });
    it('should render the body', () => {
      const { wrapper } = shallow(<BusinessCatalogTop {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
});
