import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import history from '../history';
import Navbar from '../components/navbar';
import customStyles from '../css/style.css';

/**
 * @class NavComponent
 * 
 * @extends {React.Component}
 */
class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    /** 
    *@description sends data to server
    *
    * @returns {func} funtion
    * 
    * @memberof Nav Component
    */
    handleLogout(event) {
        event.preventDefault();
        localStorage.clear();
        history.push('/');
        window.location.reload()
    }

    /** 
    *@description - renders the form component
    *
    * @returns {JSX} - JSX
    * 
    * @memberof LoginComponent
    */
    render() {
        return (
            <div>
                <Navbar
                    loggedIn={localStorage.token} logout={this.handleLogout} />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.authReducers;
    return {
        data
    }
}

export default connect(mapStateToProps)(Nav);