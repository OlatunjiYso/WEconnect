import React from "react";
import { shallow, mount, render } from 'enzyme';

import LoginForm from '../../components/loginForm';

describe('All tests for login components', () => {
  const mockSubmit = jest.fn();
  const mockOnChange = jest.fn();

  const props = {
    user: { username: " ", password: " " },
    handleChange: mockOnChange,
    handleSubmit: mockSubmit,
    isFetching: false,
    errors: {}
  };
  const propsWithErrrors = {
    ...props, errors: {
      status: 400,
      data: {
        message: 'errors'
      }
    }
  }
  const propsWithRequests = {
    ...props,  isFetching: true,
  }
  
    it('should be defined', () => {
      expect(LoginForm).toBeDefined();
    });
    it('should render the login form', () => {
      const { wrapper } = shallow(<LoginForm {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should contain a form', () => {
      const wrapper = shallow(<LoginForm {...props} />);
      expect(wrapper.find('form').length).toEqual(1);
    });
    it('should contain a submit button', () => {
      const wrapper = shallow(<LoginForm {...props} />);
      const button = wrapper.find('.form-btn .btn')
      expect(button.length).toEqual(1);
    }); 
    it("should be able to submit", () => {
      const wrapper = shallow(<LoginForm {...props} />);
      const loginForm = wrapper.find("#loginForm");
      loginForm.simulate("submit");
      expect(mockSubmit).toHaveBeenCalled();
    });
    it("should call onChange when an input field changes", () => {
      const wrapper = shallow(<LoginForm {...props} />);
      const usernameField = wrapper.find("#username");
      const passwordField = wrapper.find("#password");
      passwordField.simulate("change");
      usernameField.simulate("change");
      expect(mockOnChange.mock.calls.length).toEqual(2);
    });
    it("should not show error message by default", () => {
      const wrapper = shallow(<LoginForm {...props} />);
      const loginErrors = wrapper.find("#loginErrors");
      expect(loginErrors.length).toEqual(0);
    });
    it("should show error message when error exists", () => {
      const wrapper = shallow(<LoginForm {...propsWithErrrors} />);
      const loginErrors = wrapper.find("#loginErrors");
      expect(loginErrors.length).toEqual(1);
    });
    it("should not show spinner by default", () => {
      const wrapper = shallow(<LoginForm {...props} />);
      const spinner = wrapper.find("#spinner");
      expect(spinner.length).toEqual(0);
    });
    it("should  show spinner when making requests", () => {
      const wrapper = shallow(<LoginForm {...propsWithRequests} />);
      const spinner = wrapper.find("#spinner");
      expect(spinner.length).toEqual(1);
    });
});
