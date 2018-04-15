import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Input } from 'react-materialize';

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
        this.handleSubmit = this.handleSubmit.bind(this);
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
    * @returns {func} funtion
    * 
    * @memberof ReviewFormComponent
    */
    handleSubmit(event) {
        alert('A review has been made: ' + this.state.message);
        event.preventDefault();
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
        const handleSubmit = this.handleSubmit;
        return (
            <div className="row">
                <form onSubmit={handleSubmit} >
                    <div className="row">
                    <div className="input-field col s12">
                        <textarea value={message} onChange={handleChange} name="message" className="materialize-textarea" length="80"></textarea>
                        <label>
                            <span class= "grey-text body-font">Give a review </span>
                        </label>
                    </div>
                    </div>
                    <div className="row left-align">
                        <input type="submit" className="btn green lighten-4  pink-text text-darken-4" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}


export default ReviewForm;