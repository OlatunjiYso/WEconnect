import React, { Component } from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, SideNav, Navbar, NavItem } from 'react-materialize'

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
        return (
            <div>
                <nav>
                    <div className="nav-wrapper green darken-4 text-lighten-3">
                        <Link to="/" className=" Sofia brand-logo  logo white-text">WEconnect</Link>
                        <ul className="right hide-on-med-and-down head-font">
                            <li>
                                <Link to="/login" className="white-text">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup" className="white-text">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/user/profile" className="white-text">My Profile</Link>
                            </li>
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
                        >
                            <ul className="side-nav" id="mobile-demo">

                                <li>
                                    <Link to="/login" className="white-text">Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="white-text">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/user/profile" className="white-text">My Profile</Link>
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

export default NavBar;