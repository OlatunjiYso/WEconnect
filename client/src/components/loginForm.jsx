import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import loader from "../assets/images/loader.gif";


/**
 * @description renders a form hold user login details
 * @function LoginForm
 * 
 * @param { object } props - information passed from parent component
 * 
 * @returns { jsx } jsx - a login form
 */
const LoginForm = (props) => {
    const { handleChange, handleSubmit, user, errors, isFetching } = props;
    const { username, password } = user;
    const { status, data } = errors;
    // display request fetching process progress
    const spinner = isFetching ? (
        <img
          id="spinner"
          className="responsive-img left-gap"
          src={loader}
          style={{ height: "40px", width: "40px" }}
        />
      ) : null;
      // display signup errors
    const signinError = status ? (
        <div className="col s8 offset-s2 m4 offset-m4 left-align error-box" id="loginErrors">
          <h6>
            <i className="material-icons red-text tiny">priority_high</i>{" "}
            {data.message}
          </h6>
        </div>
      ) : null;
    return (
        <main>
        <div className="row head-font top-pad-much no-bottom-gap">
          {signinError}
          <div className="col s10 offset-s1 m6 offset-m3 grees form-jacket">
            <h4 className="center head-font form-heading top-gap">
              <span className=""> Sign In </span>
            </h4>
            <form onSubmit={handleSubmit} id="loginForm">
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
              <div className="row">
                <div className="col s4">
                  <input
                    type="submit"
                    value="Submit"
                    className="form-btn btn"
                  />
                </div>
                <div className="">{spinner}</div>
              </div>
              <div className="col s12 center-align top-gap">
                <Link to="/signup" className="pink-text text-darken-4">
                  Not a user? <span className="auth-hover"> signup here </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
);}

LoginForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
  };
  
  export default LoginForm;
  