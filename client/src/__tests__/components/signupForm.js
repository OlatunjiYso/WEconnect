import React from "react";

import SignUpForm from "../../components/signupForm";

describe("All tests for sign form component", () => {
  const mockSubmit = jest.fn();
  const mockOnChange = jest.fn();
  const props = {
    user: {
      username: "",
      password: "5656565",
      email: "",
      firstname: "",
      lastname: "",
      confirmPassword: "yhyyyyhyh"
    },
    handleChange: mockOnChange,
    handleSubmit: mockSubmit,
    formErrors: {},
    isFetching: false,
    passwordMismatch: false
  };
  const propsWithMatchedPassword = {
    ...props,
    user: { ...props.user, password: "q1w2e3r4", confirmPassword: "q1w2e3r4" }
  };
  const propsWithRequests = {
    ...props,
    isFetching: true
  };
  const propsWithConflictErrors = {
    ...props,
    formErrors: {
      status: 409,
      data: {
        message: 'error'
      }
    }
  }
  const propsWithValidationErrors = {
    ...props,
    formErrors: {
      status: 400,
      data: {
        errors:[ 'error', 'error2', 'error3', 'another one' ]
      }
    }
  }

  it("should be defined", () => {
    expect(SignUpForm).toBeDefined();
  });
  it("should render the signup form", () => {
    const { wrapper } = shallow(<SignUpForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should contain a form", () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    expect(wrapper.find("form").length).toEqual(1);
  });
  it("should be able to submit", () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    const signupForm = wrapper.find("form");
    signupForm.simulate("submit");
    expect(mockSubmit).toHaveBeenCalled();
  });
  it("should call onChange when an input field changes", () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    const emailField = wrapper.find("#email");
    const firstnameField = wrapper.find("#firstname");
    const lastnameField = wrapper.find("#lastname");
    const passwordField = wrapper.find("#password");
    const confirmPasswordField = wrapper.find("#confirmPassword");
    const usernameField = wrapper.find("#username");
    emailField.simulate("change");
    firstnameField.simulate("change");
    lastnameField.simulate("change");
    passwordField.simulate("change");
    confirmPasswordField.simulate("change");
    usernameField.simulate("change");
    expect(mockOnChange.mock.calls.length).toEqual(6)
  });
  it("should indicate password mismatch if it does", () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    const mismatchIndicator = wrapper.find("#mismatchedPassword");
    expect(mismatchIndicator.length).toEqual(1);
  });
  it("should indicate password matches if it does", () => {
    const wrapper = shallow(<SignUpForm {...propsWithMatchedPassword} />);
    const mismatchIndicator = wrapper.find("#matchedPassword");
    expect(mismatchIndicator.length).toEqual(1);
  });
  it("should not show spinner by default", () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    const spinner = wrapper.find("#spinner");
    expect(spinner.length).toEqual(0);
  });
  it("should  show spinner when making requests", () => {
    const wrapper = shallow(<SignUpForm {...propsWithRequests} />);
    const spinner = wrapper.find("#spinner");
    expect(spinner.length).toEqual(1);
  });
  it("should  not show validation errors by default", () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    const validationErrors = wrapper.find("#validationErrors");
    expect(validationErrors.length).toEqual(0);
  });
  it("should  not show conflict errors by default", () => {
    const wrapper = shallow(<SignUpForm {...props} />);
    const conflictErrors = wrapper.find("#conflictErrors");
    expect(conflictErrors.length).toEqual(0);
  });
  it("should show validation errors when present", () => {
    const wrapper = shallow(<SignUpForm {...propsWithValidationErrors} />);
    const validationErrors = wrapper.find("#validationErrors");
    expect(validationErrors.length).toEqual(4);
  });
  it("should show conflict errors when present", () => {
    const wrapper = shallow(<SignUpForm {...propsWithConflictErrors} />);
    const conflictErrors = wrapper.find("#conflictErrors");
    expect(conflictErrors.length).toEqual(1);
  });
});
