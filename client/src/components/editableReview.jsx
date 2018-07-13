import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @description component class for editing reviews
 * 
 * @class EditableReview
 * 
 * @extends {React.Component}
 */
class EditableReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: this.props.review.description,
            isFetching: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

 /**
   * @description handles submitting a review
   * @method EditableReview
   *
   * @param { object } event - event object
   *
   * @returns { func } function that persists review
   * @memberof ReviewControls Component
   */
   handleSubmit(event) {
    event.preventDefault();
    const { businessId, review } = this.props;
    const reviewId = review.id
    const newReview = {};
    newReview.description = this.state.updated;
    this.props.updateReview(businessId, reviewId, newReview);
    this.props.makeEditable(null);
}

/**
   * @description exits edit mode
   * @method EditableReview
   *
   * @param { object } event - event object
   *
   * @returns { null } no return, exits edit mode
   * @memberof ReviewControls Component
   */
   cancelEdit(event) {
    event.preventDefault();
    this.props.makeEditable(null);
}
 /**
   * @description handles changes in input field
   * @method EditableReview
   *
   * @param { object } event - event object
   *
   * @returns { func } function that respond to changes
   * @memberof ReviewControls Component
   */
   handleChange(event) {
    event.preventDefault();
    this.setState({
        ...this.state,
        updated: event.target.value
    });
}
 /**
   * @description renders the review form
   * @method EditableReview
   *
   * @returns { jsx } editable review form
   * @memberof ReviewControls Component
   */
    render() {
        return (
            <div>
                <div className="row grey-text text-darken-4 all-borders">
                    <form onSubmit={this.handleSubmit} >
                    <input className="col s12" value={this.state.updated} onChange={this.handleChange}  
                    />
                    <input type="submit" value="save" className="btn-edit"/>
                    {'   '}
                    <button className="btn-danger " onClick={this.cancelEdit}> cancel </button>
                    </form>
                </div>
            </div>
        )
    }
}
EditableReview.propTypes = {
    review: PropTypes.object.isRequired,
    businessId: PropTypes.number.isRequired
}

export default EditableReview;