import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllReviews, postReview, updateReview, deleteReview } from '../actions/review'
import Review from '../components/review';
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

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof AllBusinessesComponent
    */
   componentDidMount() {
    const businessId = this.props.businessId;
    this.props.getAllReviews(businessId)   
}

    /** 
    *
    *
    * @returns {func} funtion
    * 
    * @memberof ReviewFormComponent
    */
    handleSubmit(event) {
        event.preventDefault();
        const businessId = this.props.businessId;
        const review = {}
        review.description = this.state.message;
        review.username = this.props.userData.user.username;
        this.props.postReview(businessId, review);
        this.setState({
            ...this.state,
            message: ''
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
        const allReviews = this.props.reviewData.reviews
        const reviewLabel = (localStorage.token) ? 'Give a review' : 'login to give a review';
        // generate array of reviews or null if no review present
        const myReviews = (allReviews.length > 0) ?
         allReviews.map((PresentReview, index) => {
            return (
                <Review 
                key = { index }
                 review = { PresentReview } 
                 businessId = {this.props.businessId}
                 reviewerId = {this.props.userData.user.id}
                 updateReview = { this.props.updateReview }
                 deleteReview = { this.props.deleteReview }
                 getAllReviews = { this.props.getAllReviews }
                 />
            )
        }) : <h6 className="grey-text"> Be the first to give us a review </h6>;
        return (
            <div className="top-pad-much">
                <div className="col s12 m10 offset-m1">
                    <h5 className="left-align green-text text-darken-4"> What Our Clients are saying</h5>
                    <div className="row">
                        <form onSubmit={this.handleSubmit} >
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea value={message} onChange={handleChange} name="message" className="materialize-textarea" length="80"></textarea>
                                    <label>
                                        <span className="grey-text body-font"> { reviewLabel } </span>
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

const mapStateToProps = (state) => {
    const reviewData = state.reviewReducer;
    const userData = state.authReducers;
    return {
        reviewData, userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAllReviews, postReview, updateReview, deleteReview }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);



