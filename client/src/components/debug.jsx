return (
  <div>
    <div>
      <div>
        <h3> Products</h3>
        <ul> {linkList} </ul>
      </div>
    </div>
    <Route path={`${match.url}/:productId`}
      render={(props) => <Product data={productsData} {...props} />} />
    <Route exact path={match.url}
      render={() => (
        <div>Please select a product.</div>
      )}
    />
  </div>
)


business: {
  businessName: '', category: '', slogan: '', address: '',
  city: '', state: '',phone: '', email: '', whatsapp: '', twitter: '',
  facebook: '', instagram: '', heading1: '', body1: '', heading2: '',
  body2: '', heading3: '', body3: ''
},










import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'react-materialize'

/**
 * @s FooterComponent
 * 
 * @extends {React.Component}
 */
class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: this.props.review.description
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
    * @memberof ReviewComponent
    */
    render() {
        const review = this.props.review;
        const reviewControls = (review.reviewerId == localStorage.id) ?
            <div>
                <span className="left">
                    <Modal
                        trigger={<i className="material-icons tinyy green-text">edit</i>}>
                        <form onSubmit={this.handleSubmit}>
                            <h6 className="grey-text"> Update your review here </h6>
                            <input type="text" value={this.state.updated} onChange ={this.handleChange} />
                            <input type="submit" value="update" className="green lighten-1" />
                        </form>
                    </Modal>
                </span>
                <span className="right-align">
                    <Modal
                        trigger={<i className="material-icons tinyy red-text">delete_forever</i>}>
                        <p> Are you sure you want to delete this review? </p>
                        <div>
                            <button className="center-align red-text btn grey lighten-5" onClick={this.props.delete}>
                                Yes
                        </button>
                        </div>
                    </Modal>
                </span>
            </div> : null;
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