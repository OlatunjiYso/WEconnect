import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-materialize";
import { Link } from "react-router-dom";

/**
 * @description component class for managing reviews
 *
 * @class ReviewControls
 *
 * @extends {React.Component}
 */
class ReviewControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: null
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.makeEdits = this.makeEdits.bind(this);
  }

  /**
   *@description - makes a selected review editable
   *
   * @returns {func} funtion
   *
   * @memberof ReviewControls Component
   */
  makeEdits(event) {
    event.preventDefault();
    const { review, makeEditable } = this.props;
    const reviewId = review.id;
    makeEditable(reviewId);
  }

  /**
   * @description - deletes a review
   *
   * @returns {func} funtion
   *
   * @memberof ReviewControls Component
   */
  handleDelete(event) {
    event.preventDefault();
    const { businessId, review, deleteReview } = this.props;
    const reviewId = review.id;
    deleteReview(businessId, reviewId);
    $("#deleteReviewModal").modal("close");
  }

  /**
   * @description - renders the delete and edit icon for reviews
   *
   * @returns {JSX} JSX
   *
   * @memberof ReviewControls Component
   */
  render() {
    const spinner = this.state.isFetching ? (
      <span className="green-text"> please wait ...</span>
    ) : null;

    return (
      <div>
        <Link className="left cursor" to="#!" onClick={this.makeEdits} id= "editReviewPen">
          <i className="material-icons green-text">edit</i>
        </Link>

        <span className="right-align cursor">
          <Modal
            id="deleteReviewBin"
            trigger={
              <i className="material-icons tinyy red-text">delete_forever</i>
            }
          >
            <p> Are you sure you want to delete this review? </p>
            <div>
              <button
                className="center-align red-text btn grey lighten-5"
                onClick={this.handleDelete}
                id="#deletebutton"
              >
                Yes
              </button>
              {spinner}
            </div>
          </Modal>
        </span>
      </div>
    );
  }
}
ReviewControls.propTypes = {
  review: PropTypes.object.isRequired,
  businessId: PropTypes.number.isRequired,
  deleteReview: PropTypes.func.isRequired,
  makeEditable: PropTypes.func.isRequired,
};

export default ReviewControls;
