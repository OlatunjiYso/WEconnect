import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Input } from 'react-materialize';
import axios from 'axios';

import setToken from '../helpers/authorization';
import Review from './review';
/**
 * @description BusinessFormComponent
 * 
 * @extends {React.Component}
 */
class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const businessId = this.props.businessId;
        const review = {}
        review.description = this.state.message;
        const { dispatch, match } = this.props;
        setToken(localStorage.token)
        axios.post(`https://weconnect-main.herokuapp.com/api/v1/businesses/${businessId}/reviews`, (review))
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response);
            });
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
            message: event.target.value
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
        // generate array of reviews or null if no review present
        const myReviews = (allReviews.length > 0) ?
         allReviews.map((PresentReview, index) => {
            return (
                <Review key = { index } review = { PresentReview } />
            )
        }) : <h6 className="grey-text"> Be the first to give us a review </h6>;
        return (
            <div className="top-pad-much">
                <div className="col s10 offset-s1">
                    <h4 className="left-align green-text text-darken-4"> What Our Clients are saying</h4>
                    <div className="row">
                        <form onSubmit={this.handleSubmit} >
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