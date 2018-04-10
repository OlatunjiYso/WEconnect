import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Navbar from '../components/navbar';

import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';

/**
 * @class LoginComponent
 * 
 * @extends {React.Component}
 */
class Login extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof LoginComponent
    */
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <div className="row head-font">
                        <div className="col s4 offset-s4 center-align">
                            <h2 className="center head-font pink-text"> Sign In </h2>
                        </div>
                    </div>
                    <div className="row top-pad body-font">
                        <div className="row">
                            <div className="col s8 offset-s2 m6 offset-m4 l4 offset-l4">
                                <form className="pink lighten-5 form-body" id="short-forms">
                                    <div className="row black-text">
                                        <label className="input-field col s12">
                                            <span className="blue-grey-text text-darken-4">Username:</span>
                                            <input type="text" name="username" />
                                        </label>
                                    </div>
                                    <div className="row black-text">
                                        <label className="input-field col s12">
                                            <span className="blue-grey-text text-darken-4">Password:</span>
                                            <input type="password" name="password" />
                                        </label>
                                    </div>
                                </form>
                                <div className="center-align">
                                    <Link to="all_businesses.html"
                                        className="waves-effect waves-light pink-text text-lighten-4 blue-grey darken-4  btn top-gap">Sign in</Link>
                                </div>
                                <p className="black-text bottom-pad">
                                    <em> Not yet Registered? Click
                        <Link to="signup.html" className="pink-text"> here </Link> to sign up right away</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

export default Login;