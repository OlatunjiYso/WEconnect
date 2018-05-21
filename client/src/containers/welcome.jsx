import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import history from '../history';
import { onBoardUser } from '../actions/auth';
import Footer from '../components/footer';
import Navbar from '../components/navbar'
import customStyles from '../css/style.css';

/**
 * @class Welcome
 * 
 * @extends {React.Component}
 */
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const newUser = this.props.data.user;
       this.props.onBoardUser(newUser);

    }
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof WelcomeComponent
    */
    render() {
        const user = this.props.data.user;
        // dispaly spinner 
        console.log(this.props.data.awaitingResponse)
        const spinner = this.props.data.awaitingResponse ? 
        <h6 className = "no-bottom-gap"> Please wait .... </h6> : null

        return (
            <div>
                <main>
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <h2 className ="newuser center">
                            Hi, {user.firstname} {user.lastname}
                            </h2>
                            <h5 className="welcome top-pad body-font">
                                Thank you for joining our great commmunity. We are excited to have you here. We can't wait to see you setup your profile and add your very first  business on weconnect. Please feel free to reach out to us as regards issues with your weconnect account, we are always willing to here from our distinguished users.
                                <div className="top-pad">Warm regards,</div>
                                <div className="Sofia newuser ">- Weconnect team.</div>
                          </h5>
                        </div>
                        <div className="col s12 center"> 
                        <form onSubmit={this.handleSubmit}>
                         {spinner}
                        <input type="submit" value="Begin Here" className="welcome-btn center-align" /> 
                        </form>
                        </div>
                    </div>
                </main>
                <Footer />
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ onBoardUser }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);