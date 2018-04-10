import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

/**
 * @class NavbarComponent
 * 
 * @extends {React.Component}
 */
class Navbar extends Component {
    componentDidMount () {
    
    }
    /**
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof NavbarComponent
    */
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue-grey darken-4 text-lighten-3">
                        <Link to="index.html" className=" Sofia brand-logo  logo pink-text text-lighten-4">WEconnect</Link>
                        {/* <Link to="#" data-activates="mobile-demo" ref="buttoncollapse">
                            <i className="material-icons"> more </i>
                        </Link> */}
                        <ul id="nav-mobile" className="right hide-on-med-and-down head-font">
                            <li>
                                <Link to="signin.html" className="pink-text text-lighten-4">Sign In</Link>
                            </li>
                            <li>
                                <Link to="signup.html" className="pink-text text-lighten-4">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="user_profile.html" className="pink-text text-lighten-4">My Profile</Link>
                            </li>
                            <li>
                                <Link to="all_businesses.html" className="pink-text text-lighten-4">All</Link>
                            </li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li>
                                <Link to="signin.html" className="pink-text text-lighten-4">Sign In</Link>
                            </li>
                            <li>
                                <Link to="signup.html" className="pink-text text-lighten-4">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="user_profile.html" className="pink-text text-lighten-4">My Profile</Link>
                            </li>
                            <li>
                                <Link to="all_businesses.html" className="pink-text text-lighten-4">All</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;