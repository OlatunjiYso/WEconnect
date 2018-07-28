import React from "react";

import EditableReview from '../../components/editableReview';

describe('All tests for editable review component', () => {
const mockEdit = jest.fn();
const mockUpdate = jest.fn();
  const props = {
    key: 0,
    review: {},
    businessId: 1,
    updateReview: mockUpdate,
    makeEditable: mockEdit,
  };
    it('should be defined', () => {
      expect(EditableReview).toBeDefined();
    });
    it('should render the banner', () => {
      const { wrapper } = shallow(<EditableReview {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
    it("should contain a form for editing review", () => {
        const wrapper = shallow(<EditableReview {...props} />);
        expect(wrapper.find("form").length).toEqual(1);
      });
      it("should call a mock funtion when cancel button is clicked", () => {
        const wrapper = shallow(<EditableReview {...props} /> );
        const cancelButton= wrapper.find('#cancelReviewUpdate');
        cancelButton.simulate( 'click', {
            preventDefault: () => {
            }
           });
        expect(mockEdit).toHaveBeenCalled();
      });
      it("should call a mock funtion when update button is clicked", () => {
        const wrapper = shallow(<EditableReview {...props} /> );
        const event ={
               preventDefault: () => {}
             }
        wrapper.instance().handleSubmit(event);
        expect(mockUpdate).toHaveBeenCalled();
      });
});
