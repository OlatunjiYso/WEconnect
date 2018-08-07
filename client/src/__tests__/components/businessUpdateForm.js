import React from "react";
import { shallow, mount, render } from "enzyme";

import BusinessUpdateForm from "../../components/businessUpdateForm";

describe("All tests for business form components", () => {
  const props = {
    image: {},
    business: {},
    handleChange: ()=> {},
    handleSubmit: ()=> {},
    formErrors: {},
    isFetching: false,
    handleImageChange: ()=> {}
  };

  it("should be defined", () => {
    expect(BusinessUpdateForm).toBeDefined();
  });
  it("should render the business form", () => {
    const { wrapper } = shallow(<BusinessUpdateForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should contain a form", () => {
    const wrapper = shallow(<BusinessUpdateForm {...props} />);
    expect(wrapper.find("form").length).toEqual(1);
  });
  it("should contain a submit button", () => {
    const wrapper = shallow(<BusinessUpdateForm {...props} />);
    const button = wrapper.find(".btn");
    expect(button.length).toEqual(1);
  });
});
