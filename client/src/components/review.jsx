import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

/**
 * @s FooterComponent
 * 
 * @extends {React.Component}
 */
class Review extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof ReviewComponent
    */
    render() {
        console.log(localStorage.id)
        const review = this.props.review;
        const reviewControls = (review.reviewerId == localStorage.id) ?
            <div>
                <Link className="left red-text" to="#!"> <i className="material-icons tinyy">delete_forever</i>
                </Link>
                <Link className="right green-text" to="#!"> <i className="material-icons tinyy">edit</i>
                </Link>
            </div> : null;
        return (
            <div>
                <div className="row grey-text text-darken-4 grey lighten-5">
                    <p className="col s12">
                        {review.description}
                    </p>
                    <h6 className="col s6 left-align pink-text text-darken-4"> {review.reviewerName}</h6>
                    <h6 className="col s6 right-align pink-text text-darken-4"> {review.createdAt}</h6>
                    {reviewControls}
                </div>
            </div>
        )
    }
}
Review.propTypes = {
    review: PropTypes.object.isRequired
}

export default Review;