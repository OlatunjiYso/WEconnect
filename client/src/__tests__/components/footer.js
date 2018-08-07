import React from "react";

import Footer from '../../components/footer';

describe('All tests for footer component', () => {
  
    it('should be defined', () => {
      expect(Footer).toBeDefined();
    });
    it('should render the footer', () => {
      const { wrapper } = shallow(<Footer />);
      expect(wrapper).toMatchSnapshot();
    });
});
