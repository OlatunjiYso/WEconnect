import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'react-materialize';
import ReviewControls from './review_controls';

/**
 * @s FooterComponent
 * 
 * @extends {React.Component}
 */
class Review extends Component {
    constructor(props) {
        super(props);
    }


    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof Review Component
    */
    render() {
        const review = this.props.review;
        const reviewOptions = (review.reviewerId == localStorage.id) ?
            <ReviewControls review = {this.props.review} businessId = {this.props.businessId}/> : null;
        return (
            <div>
                <div className="row grey-text text-darken-4 grey lighten-5">
                    <p className="col s12">
                        {review.description}
                    </p>
                    <h6 className="col s6 left-align grey-text">
                        <em>{review.reviewerName}</em>
                    </h6>
                    <h6 className="col s6 right-align grey-text"> {review.createdAt}</h6>
                    {reviewOptions}
                </div>
            </div>
        )
    }
}
Review.propTypes = {
    review: PropTypes.object.isRequired
}

export default Review;