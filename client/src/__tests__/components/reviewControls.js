import React from "react";

import ReviewControls from '../../components/review_controls';

describe('All tests for reviews control component', () => {
  const mockFn = jest.fn();
  const props = {
    review: {},
        businessId: 0,
        getAllReviews: mockFn,
        deleteReview: mockFn,
        makeEditable: mockFn
  };
    it('should be defined', () => {
      expect(ReviewControls).toBeDefined();
    });
    it('should render both review controls', () => {
      const wrapper = shallow(<ReviewControls {...props} />);
      const deleteReviewBin = wrapper.find('#deleteReviewBin');
      const editReviewPen = wrapper.find('#editReviewPen');
      expect(deleteReviewBin.length).toEqual(1);
      expect(editReviewPen.length).toEqual(1);
    });
    it('should not render confirmDeleteButton', () => {
        const wrapper  = shallow(<ReviewControls {...props} />);
        const confirmDeleteButton = wrapper.find('#deletebutton')
        expect(confirmDeleteButton.length).toEqual(0);
      });
      it('should have clickable modal button', () => {
        const wrapper = shallow(<ReviewControls {...props} />);
        const deleteReviewBin = wrapper.find('#deleteReviewBin');
        deleteReviewBin.simulate('click');
      });
});
