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
        const { handleChange, updateUser, submitPassword, switchCase, submitPicture, getu } = this.props;

        // Bring in data as props from ProfileUpdate container
        const { updated, formErrors, presentCase } = this.props;

        // initialize displayedForm
        let displayedForm = <span> form </span>
        let formHeading = '';

        // Display validation errors if present
        const validationErrors = formErrors.validationErrors ?
            <div className=" col s8 offset-s2 m6 offset-m3 left-align error-box bottom-gap">
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
        const passwordErrorMessage = formErrors.passwordMismatch ?
        <div className="col s8 offset-s2 m6 offset-m3 center-align error-box bottom-gap">
                <h6>
                    <i className="material-icons red-text tiny">clear</i> 
                    Enter the correct current password to proceed
                </h6>
            </div> : null

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
            <form onSubmit={updateUser}>
                <label className="form-label">Enter new email: </label>
                <input type="email" value={updated.email} onChange={handleChange} name="email" required className="form-input white" />
                <label className="form-label">Enter new username: </label>
                <input type="text" value={updated.username} onChange={handleChange} name="username" required className="form-input white" />
                <input type="submit" value="submit" className="form-btn btn center-align" />
                {updateOutcome} {spinner}
                <Link to="#!" className="green-text right" onClick={switchCase}> update your password? </Link>
            </form>

        // construct password update form
        const passwordForm =
            <form onSubmit= {submitPassword}>
                <label className="form-label">Current Password: </label>
                <input type="password" value={updated.currentPassword} onChange={handleChange} name="currentPassword" required className="form-input white" />
                <label className="form-label"> New Password: </label>
                <input type="password" value={updated.newPassword} onChange={handleChange} name="newPassword" required className="form-input white" />
                <label className="form-label"> Confirm New Password: </label> {reportMatch}
                <input type="password" value={updated.confirmNewPassword}
                    onChange={handleChange} name="confirmNewPassword" required className="form-input white" />
                <input type="submit" value="change Password" className="form-btn btn center-align" />
                {updateOutcome} {spinner}
                <Link to="#!" className="green-text right" onClick={switchCase}> update your picture? </Link>
            </form>

        // construct picture update form
        const pictureForm =
            <form onSubmit={submitPassword}>
                <label className="form-label">Dispaly Picture: </label>
                <input type="text" value="user picture" name="userpic" required className="form-input white" />
                <input type="submit" value="submit" className="form-btn btn center-align" />
                {updateOutcome} {spinner}
                <Link to="#!" className="green-text right" onClick= {switchCase}> update email or username? </Link>
            </form>

        switch (presentCase) {
            case 0:
                displayedForm = detailsForm
                formHeading = 'Edit your user details here'
                break;
            case 1:
                displayedForm = passwordForm
                formHeading = 'Change your password'
                break;
            case 2:
                displayedForm = pictureForm
                formHeading = 'Change your picture'
                break;
            default:
                displayedForm = detailsForm
                formHeading = 'Edit your user details here'
        }
        return (
            <main>
                <div className="row head-font top-pad-much ">
                    {validationErrors} {conflictErrors} {passwordErrorMessage}
                    <div className="col s8 offset-s2 m6 offset-m3 grees form-jacket">
                        <h4 className="form-heading"> {formHeading} </h4>
                        {displayedForm}
                    </div>
                </div>
            </main>
        )
    }
}

ProfileUpdateForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    submitPassword: PropTypes.func.isRequired,
    switchCase: PropTypes.func.isRequired,
    submitPicture: PropTypes.func.isRequired,
    updated: PropTypes.object.isRequired,
    formErrors: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    presentCase: PropTypes.number.isRequired,
}
export default ProfileUpdateForm;