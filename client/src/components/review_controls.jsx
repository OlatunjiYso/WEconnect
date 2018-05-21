import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'react-materialize'
import axios from 'axios';

import reviewApi from '../service/reviewApi';
import history from '../history';
import setToken from '../helpers/authorization';

/**
 * @description ReviewControls Component
 * 
 * @extends {React.Component}
 */
class ReviewControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: this.props.review.description,
            isFetching: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    /** 
    *
    *
    * @returns {func} funtion
    * 
    * @memberof ReviewControls Component
    */
   handleSubmit(event) {
    event.preventDefault();
    this.setState({
        ...this.state,
       isFetching: true
    });
    const businessId = this.props.businessId;
    const reviewId = this.props.review.id;
    const newReview = {}
    newReview.description = this.state.updated;
    setToken(localStorage.token);
        reviewApi.updateReview(businessId, reviewId, newReview)
        .then(() => {
            this.setState({
                ...this.state,
               isFetching: null
            });
            setTimeout(() => window.location.reload(), 2000);
        })
        .catch((error) => {
            this.setState({
                ...this.state,
               isFetching: null
            });
            if (error && error.response.status === 401) {
                history.push('/login');
            }
        });
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
    this.setState({
        ...this.state,
       isFetching: true
    });
    const businessId = this.props.businessId;
    const reviewId = this.props.review.id;
    setToken(localStorage.token);
        reviewApi.deleteReview(businessId, reviewId)
        .then(() => {
            this.setState({
                ...this.state,
               isFetching: null
            });
            setTimeout(() => window.location.reload(), 2000);
        })
        .catch((error) => {
            this.setState({
                ...this.state,
               isFetching: null
            });
            if (error && error.response.status === 401) {
                history.push('/login');
            }
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
    event.preventDefault();
    this.setState({
        ...this.state,
        updated: event.target.value
    });
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
            <span className="left cursor">
                <Modal
                    trigger={<i className="material-icons tinyy green-text">edit</i>}>
                    <form onSubmit={this.handleSubmit}>
                        <h6 className="grey-text"> Update your review here </h6>
                        <input type="text" value={this.state.updated} onChange ={this.handleChange} />
                        <input type="submit" value="update" className="green lighten-1" />
                        {spinner}
                    </form>
                </Modal>
            </span>
            <span className="right-align cursor">
                <Modal
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