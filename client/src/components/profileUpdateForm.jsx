import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import customStyles from '../css/style.css';

/**
 *@class ProfileUpdateForm Component
 * 
 * @extends {React.Component}
 */
class ProfileUpdateForm extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof ProfileUpdate Component
    */
    render() {
        // Bring In methods as props from ProfileUpdate container
        const { handleChange, submitDetail, submitPassword, switchCase, submitPicture } = this.props;

        // Bring in data as props from ProfileUpdate container
        const { updated, formErrors, presentCase } = this.props;

        // initialize displayedForm
        let displayedForm = <span> form </span>
        let formHeading = '';
        let formAction;
        let buttonValue;

        // Display validation errors if present
        const validationErrors = formErrors.validationErrors ?
            <div className=" col s8 offset-s2 m3 offset-m4 left-align error-box bottom-gap">
                {formErrors.validationErrors.map((eachError, index) => {
                    return <h6 key={index}>
                        <i className="material-icons red-text tiny">clear</i>{eachError}
                    </h6>
                })}
            </div> : null;


        // Display Conflict errors if present
        const conflictErrors = formErrors.conflict ?
            <div className="col s8 offset-s2 m4 offset-m4 center-align error-box bottom-gap">
                <h6>
                    <i className="material-icons red-text tiny">clear</i> {formErrors.conflict}
                </h6>
            </div> : null


        // Dispaly password mismatch errors after hitting submit
        const passwordErrorMessage = formErrors.passwordMismatch ? 'Password doesn\'t match' : null;

        // Display password mismatch status progressively as user types in
        let reportMatch =
            (updated.confirmNewPassword !== updated.newPassword) ?
                <i className="material-icons red-text">clear</i> :
                <i className="material-icons green-text">check</i>
                console.log(updated.confirmNewPassword)
        // Display update outcome
        const updateOutcome = (formErrors.conflict || formErrors.validationErrors) ?
            <span className="form-response"> Sorry, an error occured </span> : null

        // Display asyncronous call progress feedback
        const spinner = this.props.isFetching ?
            <span className="form-response"> Please wait .... </span> : null;
        
        // construct details update form
        const detailsForm =
            <span>
                <label className="form-label">Email: </label>
                <input type="email" value={updated.email} onChange={handleChange} name="email" required className="form-input white" />
                <label className="form-label">Username: </label>
                <input type="text" value={updated.username} onChange={handleChange} name="username" required className="form-input white" />
            </span>

        // construct password update form
        const passwordForm =
            <span>
                <label className="form-label"> Old Password: </label>
                <input type="password" value={updated.oldPassword} onChange={handleChange} name="oldPassword" required className="form-input white" />
                <label className="form-label"> New Password: </label>
                <input type="password" value={updated.newPassword} onChange={handleChange} name="newPassword" required className="form-input white" />
                <label className="form-label"> Confirm New Password: </label> {reportMatch}
                <input type="password" value={updated.confirmNewPassword}
                    onChange={handleChange} name="confirmNewPassword" required className="form-input white" />
            </span>

        // construct picture update form
        const pictureForm =
            <span>
                <label className="form-label">Dispaly Picture: </label>
                <input type="text" value="user picture" name="userpic" required className="form-input white" />
            </span>

        switch (presentCase) {
            case 0:
                displayedForm = detailsForm
                formHeading = 'Edit your user details here'
                formAction = submitDetail
                buttonValue = 'switch to passwords'
                break;
            case 1:
                displayedForm = passwordForm
                formHeading = 'Change your password'
                formAction = submitPassword
                buttonValue = 'switch to picture'
                break;
            case 2:
                displayedForm = pictureForm
                formHeading = 'Change your picture'
                buttonValue = 'switch to profile'
                break;
            default:
                displayedForm = detailsForm
                formHeading = 'Edit your user details here'
                formAction = submitDetail
                buttonValue = 'switch to passwords'
        }
        return (
            <main>

                <div className="row head-font top-pad-much ">
                    {validationErrors} {conflictErrors}
                    <div className="col s8 offset-s2 m6 offset-m3 grees form-jacket">
                        <h4 className="form-heading"> {formHeading} </h4>
                        <form onSubmit={formAction}>
                            {displayedForm}
                            <input type="submit" value="submit" className="form-btn btn center-align" />
                            {updateOutcome} {spinner}
                            <Link to="#!" className="btn form-btn right" onClick={switchCase}> {buttonValue}</Link>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

ProfileUpdateForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    submitDetail: PropTypes.func.isRequired,
    submitPassword: PropTypes.func.isRequired,
    switchCase: PropTypes.func.isRequired,
    submitPicture: PropTypes.func.isRequired,
    updated: PropTypes.object.isRequired,
    formErrors: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    presentCase: PropTypes.number.isRequired,
}
export default ProfileUpdateForm;