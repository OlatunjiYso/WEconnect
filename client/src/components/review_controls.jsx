import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-materialize'
import { Link } from 'react-router-dom';

/**
 * @description ReviewControls Component
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
    const reviewId = this.props.review.id
    this.props.makeEditable(reviewId);
}


/** 
    *
    *
    * @returns {func} funtion
    * 
    * @memberof ReviewControls Component
    */
   handleDelete(event) {
    event.preventDefault();
    const { businessId } = this.props;
    const reviewId = this.props.review.id
    this.props.deleteReview(businessId, reviewId);
    $('#deleteReviewModal').modal('close');
}

    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof ReviewControls Component
    */
    render() {
        const review = this.props.review;
        const spinner = (this.state.isFetching)? <span className = "green-text"> please wait ...</span> : null;
           
        return (
            <div>
           <Link className="left cursor" to= "#!" onClick={this.makeEdits}>
           <i className="material-icons green-text">edit</i>
           
            </Link>
            
            <span className="right-align cursor">
                <Modal id= "deleteReviewModal"
                    trigger={<i className="material-icons tinyy red-text">delete_forever</i>}>
                    <p> Are you sure you want to delete this review? </p>
                    <div>
                        <button className="center-align red-text btn grey lighten-5" onClick={this.handleDelete}>
                            Yes
                    </button>
                    {spinner}
                    </div>
                </Modal>
            </span>
        </div>
        )
    }
}
ReviewControls.propTypes = {
    review: PropTypes.object.isRequired,
    businessId: PropTypes.string.isRequired,
}

export default ReviewControls;