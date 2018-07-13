import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * @description renders the top section of a business page
 * @function userUpdateForm
 *
 * @param { object } props - data passed from parent component
 *
 * @returns { jsx } jsx - switchable user update form
 */
const userUpdateForm = props => {
  const {
    handleChange,
    updateUser,
    submitPassword,
    switchForm,
    updated,
    formNumber,
    isFetching
  } = props;
  const {
    newPassword,
    confirmNewPassword,
    email,
    username,
    currentPassword
  } = updated;

  // Display password mismatch status progressively as user types in
  let reportMatch =
    confirmNewPassword !== newPassword ? (
      <i className="material-icons red-text">clear</i>
    ) : (
      <i className="material-icons green-text">check</i>
    );
  // Display asyncronous call progress feedback
  const spinner = isFetching ? (
    <span className="form-response"> Please wait .... </span>
  ) : null;
  // construct details update form
  const detailsForm = (
    <div className="col s10 offset-s1 m6 offset-m3 grees form-jacket">
      <h5 className="1form-heading center-align grey-text text-darken-2">
        {" "}
        Edit your user details here{" "}
      </h5>
      <form onSubmit={updateUser}>
        <label className="form-label">Enter new email: </label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          className="form-input white"
        />
        <label className="form-label">Enter new username: </label>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          name="username"
          className="form-input white"
        />
        <input
          type="submit"
          value="submit"
          className="form-btn btn center-align"
        />
        {spinner}
        <div className="center-align">
          <Link to="#!" className="green-text" onClick={switchForm}>
            {" "}
            update your password?{" "}
          </Link>
        </div>
      </form>
    </div>
  );
  // construct password update form
  const hideButton = confirmNewPassword !== newPassword ? true : false;
  const passwordForm = (
    <div className="col s10 offset-s1 m6 offset-m3 grees form-jacket">
      <h5 className="1form-heading center-align grey-text text-darken-2">
        {" "}
        Change your password{" "}
      </h5>
      <form onSubmit={submitPassword}>
        <label className="form-label">Current Password: </label>
        <input
          type="password"
          value={currentPassword}
          onChange={handleChange}
          name="currentPassword"
          required
          className="form-input white"
        />
        <label className="form-label"> New Password: </label>
        <input
          type="password"
          value={newPassword}
          onChange={handleChange}
          name="newPassword"
          required
          className="form-input white"
        />
        <label className="form-label"> Confirm New Password: </label>{" "}
        {reportMatch}
        <input
          type="password"
          value={confirmNewPassword}
          onChange={handleChange}
          name="confirmNewPassword"
          required
          className="form-input white"
        />
        <input
          type="submit"
          value="change Password"
          disabled={hideButton}
          className="form-btn btn center-align"
        />
        {spinner}
        <div className="center-align">
          <Link to="#!" className="green-text" onClick={switchForm}>
            {" "}
            update your username?{" "}
          </Link>
        </div>
      </form>
    </div>
  );
  // lets decide which form to show
  const displayedForm = formNumber === 0 ? detailsForm : passwordForm;
  return (
    <main>
      <div className="row head-font top-pad-much ">{displayedForm}</div>
    </main>
  );

  return (
    <main>
      <div className="row head-font top-pad-much ">{displayedForm}</div>
    </main>
  );
};

export default userUpdateForm;

userUpdateForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  submitPassword: PropTypes.func.isRequired,
  switchForm: PropTypes.func.isRequired,
  updated: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  formNumber: PropTypes.number.isRequired
};
