import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import customStyles from '../css/style.css';

/**
 * @class SignupFormComponent
 * 
 * @extends {React.Component}
 */
class SignupForm extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof Signup Component
    */
    render() {
        // Bring In methods as props from Signup container
        const handleChange = this.props.handleChange;
        const handleSubmit = this.props.handleSubmit;

        // Bring in data as props from Signup container
        const userDetail = this.props.userDetail;
        const formErrors = this.props.formErrors;

        // Display validation errors if present
        const validationErrors = formErrors.status === 400 ?
                <div className=" col s8 offset-s2 m4 offset-m4 left-align error-box bottom-gap">
                    {formErrors.data.errors.map((eachError, index) => {
                        return <h6 key={index}>
                            <i className="material-icons red-text tiny">clear</i>{eachError}
                          </h6>
                    })}
                </div> : null;
           

        // Display Conflict errors if present
        const conflictErrors = formErrors.status === 409 ?
                <div className="col s8 offset-s2 m4 offset-m4 center-align error-box bottom-gap">
                    <h6>
                    <i className="material-icons red-text tiny">clear</i> {formErrors.data.message}
                          </h6>
                </div> : null
            

        // Display password mismatch status progressively as user types in
        let reportMatch =
            (userDetail.confirmPassword !== userDetail.password) ?
                <i className="material-icons red-text">clear</i> :
                <i className="material-icons green-text">check</i>

        // Display registration outcome
        const registrationOutcome =( formErrors.status) ?
            <span className="form-response"> Sorry, an error occured </span> : null

        // Display asyncronous call progress feedback
        const spinner = this.props.isFetching ?
            <span className="form-response"> Please wait .... </span> : null;
        return (
            <main>
                
                <div className="row head-font top-pad-much ">
                {validationErrors} {conflictErrors}
                    <div className="col s8 offset-s2 m6 offset-m3 grees form-jacket">
                        <h4 className="form-heading">
                         <span className="green-border"> Join WEconnect  </span>
                         </h4>
                        <form onSubmit={handleSubmit}>
                            <label className="form-label">Firstname: </label>
                            <input type="text" value={userDetail.firstname} onChange={handleChange} name="firstname" required className="form-input white" />
                            <label className="form-label">Lastname: </label>
                            <input type="text" value={userDetail.lastname} onChange={handleChange} name="lastname" required className="form-input white" />
                            <label className="form-label">Email: </label>
                            <input type="email" value={userDetail.email} onChange={handleChange} name="email" required className="form-input white" />
                            <label className="form-label">Username: </label>
                            <input type="text" value={userDetail.username} onChange={handleChange} name="username" required className="form-input white" />
                            <label className="form-label"> Password: </label>
                            <input type="password" value={userDetail.password} onChange={handleChange} name="password" required className="form-input white" />
                            <label className="form-label">
                                Confirm Password: {reportMatch}
                            </label>
                            <input type="password" value={userDetail.confirmPassword}
                                onChange={handleChange} name="confirmPassword" required className="form-input white" />
                            <input type="submit" value="join" className="form-btn btn center-align" />{registrationOutcome} {spinner}
                            <Link to = "/login" className="right green-text text-darken-4"> Already registered? login here </Link> 
                            
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

SignupForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    userDetail: PropTypes.object.isRequired,
    formErrors: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
}
export default SignupForm;