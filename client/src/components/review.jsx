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
        const review = this.props.review;
        return (
            <div>
                <div className="row grey-text text-darken-4 grey lighten-5">
                    <p className="col s12">
                        {review.message}
                    </p>
                    <h6 className="col s6 left-align pink-text text-darken-4"> { review.reviewer }</h6>
                    <h6 className="col s6 right-align pink-text text-darken-4"> { review.date }</h6>
                </div>
            </div>
        )
    }
}
Review.propTypes = {
    review: PropTypes.object.isRequired
}

export default Review;