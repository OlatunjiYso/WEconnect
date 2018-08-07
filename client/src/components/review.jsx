import React from "react";
import PropTypes from "prop-types";
import ReviewControls from "./review_controls";

/**
 * @description renders a review in horizontal cards
 * @function Review 
 *
 * @param { object } props - data passed from parent component
 *
 * @returns { jsx } jsx - a review card
 */
const Review = props => {
  const {
    review,
    userId,
    businessId,
    getAllReviews,
    deleteReview,
    makeEditable
  } = props;
  const { reviewerId, reviewerName, createdAt, description } = review;
  const reviewControl =
    reviewerId == userId ? (
      <ReviewControls
        review={review}
        businessId={businessId}
        getAllReviews={getAllReviews}
        deleteReview={deleteReview}
        makeEditable={makeEditable}
      />
    ) : null;
  return (
    <div id="reviewCard">
      <div className="row grey-text text-darken-4 grey lighten-5">
        <p className="col s12">{description}</p>
        <h6 className="col s6 left-align grey-text">
          <em>{reviewerName}</em>
        </h6>
        <h6 className="col s6 right-align grey-text"> {createdAt}</h6>
        {reviewControl}
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  businessId: PropTypes.number.isRequired,
  getAllReviews: PropTypes.func.isRequired,
  deleteReview: PropTypes.func.isRequired,
  makeEditable: PropTypes.func.isRequired,
};

export default Review;
