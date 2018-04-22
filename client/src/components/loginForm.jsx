import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import customStyles from '../css/style.css';

/**
 * @class LoginFormComponent
 * 
 * @extends {Component}
 */
class LoginForm extends Component {

    /**
     * @description returns a form
     * \
     * @return {jsx} returns form component
     * 
     * @member loginForm
     */
    render() {
        // display request fetching process progress
        const spinner = this.props.isFetching ?
            <span className="form-response"> Please wait ... </span> : null

        // display request results
        const signinOutcome = this.props.errors.login ?
            <span className="form-response"> Oops, an error occured </span> : null

        // display signup errors
        const signinError = this.props.errors.login ?
            <div className="col s8 offset-s2 m4 offset-m4 left-align error-box  bottom-gap">
                <h6>
                    <i className="material-icons red-text tiny">clear</i> {this.props.errors.login}
                </h6>
            </div> : null

        const { handleSubmit, handleChange } = this.props;
        const userDetail = this.props.user;
        return (
            <main>
                <div className="row head-font top-pad-much no-bottom-gap">
                    {signinError}
                    <div className="col s8 offset-s2 m6 offset-m3 grees form-jacket">
                        <h4 className="center head-font form-heading">
                         <span className=""> Sign In </span>
                         </h4>
                        <form onSubmit={handleSubmit}>
                            <label className="form-label">Username: </label>
                            <input type="text" value={userDetail.username} onChange={handleChange} name="username" required className="form-input white" />
                            <label className="form-label"> Password: </label>
                            <input type="password" value={userDetail.password} onChange={handleChange} name="password" required className="form-input white" />
                            <input type="submit" value="Submit" className="form-btn btn" />{spinner} {signinOutcome}
                            <Link to= "/signup" className="form-btn btn right"> join</Link>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}
LoginForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
}

export default LoginForm;