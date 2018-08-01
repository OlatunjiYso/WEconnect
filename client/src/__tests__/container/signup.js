import React from "react";
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css/dist/js/materialize';

import Signup from '../../containers/signup';

describe('All tests for signup page', () => {
  const globalState = {
    authReducers: {
        awaitingResponse: true,
        signupErrors: { err: 0 }
    }
  };
  const store = mockStore(globalState);

// load materialize-css
$.prototype = jest.fn();

  describe('Tests for rendering shallow wrapper', () => {
    const shallowWrapper = shallow(<Provider store={store}><Signup /></Provider>);
    it('it should render signup page', () => {
      expect(shallowWrapper.length).toEqual(1);
    });
    it('should match snapshot', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });
  });

  describe('Tests for mounted wrapper', () => {
    
    const mountedWrapper = mount((
      <Provider store={store}>
        <Router>< Signup /></Router>
      </Provider>
    ));
    it('should mount correctly', () => {
      expect(mountedWrapper).toMatchSnapshot();
    })
  })
});
