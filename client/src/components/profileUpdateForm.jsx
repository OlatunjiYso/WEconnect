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
        const { handleChange, updateUser, submitPassword, switchForm } = this.props;

        // Bring in data as props from ProfileUpdate container
        const { updated, formErrors, formNumber } = this.props;

        // Display password mismatch status progressively as user types in
        let reportMatch =
            (updated.confirmNewPassword !== updated.newPassword) ?
                <i className="material-icons red-text">clear</i> :
                <i className="material-icons green-text">check</i>

        // Display asyncronous call progress feedback
        const spinner = this.props.isFetching ?
            <span className="form-response"> Please wait .... </span> : null;

        // construct details update form
        const detailsForm =
            <div className="col s10 offset-s1 m6 offset-m3 grees form-jacket">
                <h5 className="1form-heading center-align grey-text text-darken-2"> Edit your user details here </h5>
                <form onSubmit={updateUser}>
                    <label className="form-label">Enter new email: </label>
                    <input type="email" value={updated.email} onChange={handleChange} name="email" className="form-input white" />
                    <label className="form-label">Enter new username: </label>
                    <input type="text" value={updated.username} onChange={handleChange} name="username" className="form-input white" />
                    <input type="submit" value="submit" className="form-btn btn center-align" />
                    {spinner}
                    <div className = "center-align">
                    <Link to="#!" className="green-text" onClick={switchForm}> update your password? </Link>
                    </div>
                </form>
            </div>

        // construct password update form
        const passwordForm =
            <div className="col s10 offset-s1 m6 offset-m3 grees form-jacket">
                <h5 className="1form-heading center-align grey-text text-darken-2" > Change your password </h5>
                <form onSubmit={submitPassword}>
                    <label className="form-label">Current Password: </label>
                    <input type="password" value={updated.currentPassword} onChange={handleChange} name="currentPassword" required className="form-input white" />
                    <label className="form-label"> New Password: </label>
                    <input type="password" value={updated.newPassword} onChange={handleChange} name="newPassword" required className="form-input white" />
                    <label className="form-label"> Confirm New Password: </label> {reportMatch}
                    <input type="password" value={updated.confirmNewPassword}
                        onChange={handleChange} name="confirmNewPassword" required className="form-input white" />
                    <input type="submit" value="change Password" className="form-btn btn center-align" />
                     {spinner}
                     <div className = "center-align">
                    <Link to="#!" className="green-text" onClick={switchForm}> update your username? </Link>
                    </div>
                </form>
            </div>

        // lets decide which form to show 
        const displayedForm = (formNumber === 0) ? detailsForm : passwordForm
        return (
            <main>
                <div className="row head-font top-pad-much ">
                    {displayedForm}
                </div>
            </main>
        )
    }
}

ProfileUpdateForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    submitPassword: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    updated: PropTypes.object.isRequired,
    formErrors: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    formNumber: PropTypes.number.isRequired,
}
export default ProfileUpdateForm;