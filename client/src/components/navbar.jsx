import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SideNav, Navbar } from 'react-materialize'
import PropTypes from 'prop-types';

/**
 * @className NavbarComponent
 * 
 * @extends {React.Component}
 */
class NavBar extends Component {
    /**
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof NavBarComponent
    */
    render() {
        const signInOrLogout = (this.props.loggedIn) ?
            <li>
                <Link to="#!" onClick={this.props.logout} className="white-text">Logout</Link>
            </li> :
            <li>
                <Link to="/login" className="white-text">Sign In</Link>
            </li>

        const signupOrNull = (this.props.loggedIn) ? null :
            <li>
                <Link to="/signup" className="white-text">Sign Up</Link>
            </li>

        const myProfileOrNull = (this.props.loggedIn) ?
            <li>
                <Link to="/userProfile" className="white-text">My Profile</Link>
            </li> : null


        return (
            <div>
                <nav>
                    <div className="nav-wrapper nav-color pink darken-4">
                        <Link to="/" className=" Sofia brand-logo  logo green-text text-lighten-5">WEconnect</Link>
                        <ul className="right hide-on-med-and-down head-font">
                            {signInOrLogout}
                            {signupOrNull}
                            {myProfileOrNull}
                            <li>
                                <Link to="/businesses" className="white-text">All</Link>
                            </li>
                        </ul>
                        <SideNav
                            trigger={
                                <a href="" className="button-collapse">
                                    <i className="material-icons">menu</i>
                                </a>
                            }
                            options={{ closeOnClick: true }}
                            className="hide-on-large-only"
                        >
                            <ul className="side-nav head-font" id="mobile-demo">
                                <li>
                                    <Link to="/login" className="white-text">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="white-text">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/userProfile" className="white-text">My Profile</Link>
                                </li>
                                <li>
                                    <Link to="/businesses" className="white-text">All</Link>
                                </li>
                            </ul>
                        </SideNav>
                    </div>
                </nav>
            </div>
        )
    }
}
Navbar.propTypes = {
    loggedIn: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
}

export default NavBar;