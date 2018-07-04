import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @s FooterComponent
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
    *
    *
    * @returns {func} funtion
    * 
    * @memberof ReviewControls Component
    */
   handleSubmit(event) {
    event.preventDefault();
    const { businessId } = this.props;
    const reviewId = this.props.review.id
    const newReview = {};
    newReview.description = this.state.updated;
    this.props.updateReview(businessId, reviewId, newReview);
    this.props.makeEditable(null);
}

/** 
    *@description - cancels editing of a review
    *
    * @returns {func} funtion
    * 
    * @memberof ReviewControls Component
    */
   cancelEdit(event) {
    event.preventDefault();
    this.props.makeEditable(null);
}

    /** 
    *@description - handles changes in form
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
    *@description - sends page to be rendered
    *
    * @returns {JSX} JSX
    * 
    * @memberof Review Component
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
    review: PropTypes.object.isRequired
}

export default EditableReview;