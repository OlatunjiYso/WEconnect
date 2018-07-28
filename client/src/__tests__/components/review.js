import React from "react";

import Review from "../../components/review";

describe("All tests for business banner component", () => {
  const props = {
    review: { reviewerId: 0 },
    userId: 0,
    businessId: 0,
    getAllReviews: () => {},
    deleteReview: () => {},
    makeEditable: () => {}
  };

  it("should be defined", () => {
    expect(Review).toBeDefined();
  });
  it("should render the review section", () => {
    const wrapper = shallow(<Review {...props} />);
    expect(wrapper.find("#reviewCard").length).toEqual(1);
  });
  it("should render the controls if userId is same as reviewerId ", () => {
    const wrapper = shallow(<Review {...props} />);
    const controls = wrapper.find("ReviewControls");
    expect(controls.length).toEqual(1);
  });
  it("should not render the controls if userId is not same as reviewerId ", () => {
    const wrapper = shallow(<Review {...props} userId= {90}/>);
    const controls = wrapper.find("ReviewControls");
    expect(controls.length).toEqual(0);
  });
});
