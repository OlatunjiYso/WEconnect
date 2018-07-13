import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';
import Navbar from '../components/navbar';

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
    *@description clears local storage to log user out
    *
    * @method handleLogout
    * 
    * @memberof Nav Component
    * @returns {func} funtion
    */
    handleLogout(event) {
        event.preventDefault();
        localStorage.clear();
        history.push('/');
        window.location.reload()
    }

    /** 
    *@description - renders the nav bar
    *
    * @method render
    * 
    * @memberof LoginComponent
    * @returns {jsx} - navbar
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