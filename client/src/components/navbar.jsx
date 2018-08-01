import React from 'react';
import { Link } from 'react-router-dom';
import { SideNav } from 'react-materialize';
import PropTypes from 'prop-types';

/**
 * @description renders the navbar
 * @function NavBar
 * 
 * @param { object } props - data passed from parent component
 * 
 * @returns { jsx } jsx - a navbar component
 */
const NavBar = (props) => {
    const { loggedIn, logout } = props;
    const signInOrLogout = (loggedIn) ?
            <li>
                <Link to="#!" onClick={logout} className="white-text">Logout</Link>
            </li> :
            <li>
                <Link to="/login" className="white-text">Sign In</Link>
            </li>

        const signupOrNull = (loggedIn) ? null :
            <li>
                <Link to="/signup" className="white-text">Sign Up</Link>
            </li>

        const myProfileOrNull = (props.loggedIn) ?
            <li>
                <Link to="/userProfile" className="white-text">My Profile</Link>
            </li> : null

    return (
        <div>
        <nav className="pink darken-4">
                    <div className="nav-wrapper nav-color pink darken-4 container">
                        <Link to="/" className=" Sofia brand-logo  logo green-text text-lighten-5">WEconnect</Link>
                        <div>
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
                                <a href="#" className="button-collapse">
                                    <i className="material-icons">menu</i>
                                </a>
                            }
                            options={{ closeOnClick: true }}
                            className="hide-on-large-only"
                        >
                            <ul className="head-font">
                            {signInOrLogout}
                            {signupOrNull}
                            {myProfileOrNull}
                            <li>
                                <Link to="/businesses" className="white-text">All</Link>
                            </li>
                            </ul>
                        </SideNav>
                        </div>
                    </div>
                </nav>
    </div>
);}

export default NavBar;

NavBar.propTypes = {
    loggedIn: PropTypes.string,
    logout: PropTypes.func.isRequired,
  };

  