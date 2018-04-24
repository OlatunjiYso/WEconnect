import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-materialize';

import Review from './review';
import businessReviews from '../dummy/reviews'
/**
 * @description BusinessFormComponent
 * 
 * @extends {React.Component}
 */
class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /** 
    *
    *
    * @returns {func} funtion
    * 
    * @memberof ReviewFormComponent
    */
    handleChange(event) {
        this.setState({
            ...this.state,
            message: event.target.value,
            submitted: true
        });
    }

    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof ReviewFormComponent
    */
    render() {
        const message = this.state.message;
        const handleChange = this.handleChange;
        const allReviews = this.props.review
        console.log(allReviews);
        // generate array of reviews or null if no review present
        const myReviews = (allReviews) ?
         allReviews.map((PresentReview, index) => {
            return (
                <Review key = { index } review = { PresentReview } />
            )
        }) : <h5> Be the first to give us a review </h5>;
        return (
            <div className="top-pad-much">
                <div className="col s10 offset-s1">
                    <h4 className="left-align green-text text-darken-4"> What Our Clients are saying</h4>
                    <div className="row">
                        <form onSubmit={handleChange} >
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea value={message} onChange={handleChange} name="message" className="materialize-textarea" length="80"></textarea>
                                    <label>
                                        <span className="grey-text body-font">Give a review </span>
                                    </label>
                                </div>
                            </div>
                            <div className="row left-align">
                                <input type="submit" className="btn green lighten-4  pink-text text-darken-4" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className="row black-text ">
                        {myReviews}
                    </div>
                </div>
            </div>
        )
    }
}

ReviewForm.propTypes = {
    review: PropTypes.array.isRequired
}

export default ReviewForm;