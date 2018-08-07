import React from "react";

import UserUpdateForm from "../../components/userUpdateForm";

describe("All tests for business banner component", () => {
  const mockSubmit = jest.fn();
  const mockOnChange = jest.fn();

  const props = {
    handleChange: mockOnChange,
    updateUser: mockSubmit,
    submitPassword: mockSubmit,
    switchForm: () => {},
    updated: {},
    formNumber: 0,
    isFetching: false
  };

  it("should be defined", () => {
    expect(UserUpdateForm).toBeDefined();
  });
  it("should render the form", () => {
    const  {wrapper}  = shallow(<UserUpdateForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should not show either mathched nor mismatched if nothing is typed", () => {
    const  wrapper  = shallow(<UserUpdateForm {...props} />);
    const passwordMismatchIndicator = wrapper.find('#mismatchedPassword');
    const passwordMatchIndicator = wrapper.find('#matchedPassword');
    expect(passwordMatchIndicator.length).toEqual(0);
    expect(passwordMismatchIndicator.length).toEqual(0);
  });
  it("should show userDetails form by default", () => {
    const  wrapper  = shallow(<UserUpdateForm {...props} />);
    const userDetailsForm = wrapper.find('#detailsForm');
    const passwordForm = wrapper.find('#passwordForm');
    expect(userDetailsForm.length).toEqual(1);
    expect(passwordForm.length).toEqual(0);
  });
  it("should show userDetails form by default", () => {
    const  wrapper  = shallow(<UserUpdateForm {...props} formNumber={ 9 } />);
    const userDetailsForm = wrapper.find('#detailsForm');
    const passwordForm = wrapper.find('#passwordForm');
    expect(userDetailsForm.length).toEqual(0);
    expect(passwordForm.length).toEqual(1);
  });
  it("should call onchange when changes is made", () => {
    const  wrapper  = shallow(<UserUpdateForm {...props} />);
    const emailField = wrapper.find("#email");
    emailField.simulate("change");
    expect(mockOnChange).toHaveBeenCalled();
  });
  it("should call mockSubmit when form is submitted", () => {
    const  wrapper  = shallow(<UserUpdateForm {...props} />);
    const userUpdateForm = wrapper.find("#detailsForm");
    userUpdateForm.simulate("submit");
    expect(mockSubmit).toHaveBeenCalled();
  });
});
