import React from "react";

import Navbar from '../../components/navbar';

describe('All tests for navbar component', () => {
 
  const props = {
    loggedIn: '',
    logout: ()=> {}
  };
  
    it('should be defined', () => {
      expect(Navbar).toBeDefined();
    });
    it('should render the navbar', () => {
      const { wrapper } = shallow(<Navbar { ...props }/>);
      expect(wrapper).toMatchSnapshot();
    });
});
