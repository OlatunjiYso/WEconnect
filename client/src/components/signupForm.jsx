import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import loader from "../assets/images/loader.gif";

/**
 * @description renders the top section of a business page
 * @function SignupForm
 *
 * @param { object } props - data passed from parent component
 *
 * @returns { jsx } jsx - a signup form
 */
const SignupForm = props => {
  const { handleChange, handleSubmit, user, formErrors, isFetching } = props;
  const {
    username,
    password,
    confirmPassword,
    firstname,
    lastname,
    email
  } = user;
  const { status } = formErrors;

  // Display validation errors if present
  const validationErrors =
    status === 400 ? (
      <div className=" col s10 offset-s1 m4 offset-m4 left-align error-box">
        {formErrors.data.errors.map((eachError, index) => {
          return (
            <h6 key={index} id="validationErrors">
              <i className="material-icons red-text tiny">priority_high</i>
              {eachError}
            </h6>
          );
        })}
      </div>
    ) : null;

  // Display Conflict errors if present
  const conflictErrors =
    status === 409 ? (
      <div className="col s10 offset-s1 m4 offset-m4 center-align error-box">
        <h6 id="conflictErrors">
          <i className="material-icons red-text tiny">priority_high</i>{" "}
          {formErrors.data.message}
        </h6>
      </div>
    ) : null;

  // Display password mismatch status progressively as user types in
  let reportMatch =
    password == "" ? null : confirmPassword !== password ? (
      <i className="material-icons red-text" id="mismatchedPassword">
        clear
      </i>
    ) : (
      <i className="material-icons green-text" id="matchedPassword">
        check
      </i>
    );
  const passwordMisMatch = confirmPassword !== password ? true : false;

  // Display asyncronous call progress feedback
  const spinner = isFetching ? (
    <img
      id="spinner"
      className="responsive-img left-gap"
      src={loader}
      style={{ height: "40px", width: "40px" }}
    />
  ) : null;
  return (
    <main>
      <div className="row head-font top-pad-much ">
        {validationErrors} {conflictErrors}
        <div className="col s11 m6 offset-m3  l4 offset-l4 form-jacket">
          <h4 className="cform-heading pink-text text-darken-4">
            <span className="green-border"> Signup </span>
          </h4>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Firstname: </label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={handleChange}
              name="firstname"
              required
              className="form-input white"
            />
            <label className="form-label">Lastname: </label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={handleChange}
              name="lastname"
              required
              className="form-input white"
            />
            <label className="form-label">Email: </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              required
              className="form-input white"
            />
            <label className="form-label">Username: </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={handleChange}
              name="username"
              required
              className="form-input white"
            />
            <label className="form-label"> Password: </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              required
              className="form-input white"
            />
            <label className="form-label">
              Confirm Password: {reportMatch}
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              required
              className="form-input white"
            />
            <div className="row">
              <div className="col s4">
                <input
                  type="submit"
                  value="join"
                  disabled={passwordMisMatch}
                  className="form-btn btn center-align"
                />
              </div>
              <div className="col s6">{spinner}</div>
            </div>
            <div className="center-align top-pad">
              <Link to="/login" className="pink-text text-darken-4">
                Already registered?{" "}
                <span className="auth-hover"> Login here </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

SignupForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};
export default SignupForm;
