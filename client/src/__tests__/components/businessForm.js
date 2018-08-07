import React from "react";
import { shallow, mount, render } from "enzyme";

import BusinessForm from "../../components/businessForm";

describe("All tests for business form components", () => {
  const mockSubmit = jest.fn();
  const mockOnChange = jest.fn();
  const mockImageOnchange = jest.fn();
  const props = {
    image: {},
    business: {},
    handleChange: mockOnChange,
    handleSubmit: mockSubmit,
    formErrors: {},
    isFetching: false,
    handleImageChange: mockImageOnchange
  };
  const propsWithValidationErrors = {
    ...props, formErrors: {
      status: 400,
      data: {
        errors: ['error1', 'error2', 'error3']
      }
    }
  }
  const propsWithConflictErrors = {
    ...props, formErrors: {
      status: 409,
      data: {
        message: 'error'
      }
    }
  }
  const propsWithRequests = {
    ...props, 
    isFetching: true,
  }

  it("should be defined", () => {
    expect(BusinessForm).toBeDefined();
  });
  it("should render the business form", () => {
    const { wrapper } = shallow(<BusinessForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should contain a form", () => {
    const wrapper = shallow(<BusinessForm {...props} />);
    expect(wrapper.find("form").length).toEqual(1);
  });
  it("should contain a submit button", () => {
    const wrapper = shallow(<BusinessForm {...props} />);
    const button = wrapper.find(".btn .btn-large");
    expect(button.length).toEqual(1);
  });
  it("should be able to submit", () => {
    const wrapper = shallow(<BusinessForm {...props} />);
    const businessForm = wrapper.find("form");
    businessForm.simulate("submit");
    expect(mockSubmit).toHaveBeenCalled();
  });
  it("should call onChange when an input field changes", () => {
    const wrapper = shallow(<BusinessForm {...props} />);
    const emailField = wrapper.find("#email");
    const nameField = wrapper.find("#name");
    const cityField = wrapper.find("#city");
    const aboutField = wrapper.find("#about");
    const phoneField = wrapper.find("#phone");
    const categoryField = wrapper.find("#category");
    emailField.simulate("change");
    nameField.simulate("change");
    cityField.simulate("change");
    aboutField.simulate("change");
    phoneField.simulate("change");
    categoryField.simulate("change");
    expect(mockOnChange.mock.calls.length).toEqual(6)
  });
  it("should call onChange when image is selected", () => {
    const wrapper = shallow(<BusinessForm {...props} />);
    const imageField = wrapper.find("#imageUpload");
    imageField.simulate("change");
    expect(mockImageOnchange.mock.calls.length).toEqual(1)
  });
  it("should  not show validation errors by default", () => {
    const wrapper = shallow(<BusinessForm {...props} />);
    const validationErrors = wrapper.find("#validationErrors");
    expect(validationErrors.length).toEqual(0);
  });
  it("should  not show conflict errors by default", () => {
    const wrapper = shallow(<BusinessForm {...props} />);
    const conflictErrors = wrapper.find("#conflictErrors");
    expect(conflictErrors.length).toEqual(0);
  });
  it("should show validation errors when present", () => {
    const wrapper = shallow(<BusinessForm {...propsWithValidationErrors} />);
    const validationErrors = wrapper.find("#validationErrors");
    expect(validationErrors.length).toEqual(3);
  });
  it("should show conflict errors when present", () => {
    const wrapper = shallow(<BusinessForm {...propsWithConflictErrors} />);
    const conflictErrors = wrapper.find("#conflictErrors");
    expect(conflictErrors.length).toEqual(1);
  });
  it("should not show spinner by default", () => {
    const wrapper = shallow(<BusinessForm {...props} />);
    const spinner = wrapper.find("#spinner");
    expect(spinner.length).toEqual(0);
  });
  it("should not show spinner by default", () => {
    const wrapper = shallow(<BusinessForm {...propsWithRequests} />);
    const spinner = wrapper.find("#spinner");
    expect(spinner.length).toEqual(1);
  });
});
