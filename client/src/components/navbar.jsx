import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize'

/**
 * @class NavbarComponent
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
        return (
            <div>
                <Navbar brand='WEconnect' right className="green darken-3">
                    <NavItem className="black-text" href="signin.html">Sign In</NavItem>
                    <NavItem href="signup.html" className="grey-text text-darken-5">Join</NavItem>
                    <NavItem href="user_profile.html" className="blue-grey-text text-lighten-5">My Profile</NavItem>
                    <NavItem href= "all_businesses.html" className="blue-grey-text text-lighten-5">All</NavItem>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;