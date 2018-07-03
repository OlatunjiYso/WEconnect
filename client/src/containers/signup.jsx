import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { alertSuccess, alertError } from '../actions/flashMessage';
import verifyToken from '../helpers/verifytoken';
import history from '../history';
import { signup } from '../actions/auth';
import Footer from '../components/footer';
import SignupForm from '../components/signup_form';
import Navbar from './nav';


/**
 * @class SignupComponent
 * 
 * @extends {React.Component}
 */
class Signup extends Component {
    /**
     * Creates an instance of SignUpComponent.
     * 
     * @param {string} props 
     * 
     * @memberof SignUpComponent
     */
    constructor(props) {
        super(props);
        this.state = {
            userDetail: {
                username: '',
                password: '',
                email: '',
                firstname: '',
                lastname: '',
                confirmPassword: '',
            },
            passwordMismatch: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
   * @description handles token verification and page redirection
   *
   * @method componentDidMount
   *
   * @returns {boolean} show warning boolean of either true or false
   */
    componentWillMount() {
        if (verifyToken()) {
            alertSuccess('You are logged in already')
            history.push('/userProfile');
        }
    }

    /** 
    *@param {event} event
    *
    *@returns {func} funtion
    *@memberof SignupForm Component
    *
    */
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            ...this.state,
            userDetail: { ...this.state.userDetail, [name]: value },
        });
    }

    /** 
    *@param {event} event
    *
    *@returns {func} funtion
    * 
    *@memberof Signup Component
    */
    handleSubmit(event) {
        const details = this.state.userDetail
        if (details.password !== details.confirmPassword) {
            console.log()
            alertError('hhhhh')
        } else {
            event.preventDefault();
            const newUser = this.state.userDetail;
            this.props.signup(newUser)
        }
    }

    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof Signup Component
    */
    render() {
        return (
            <div id="signupPage">
                <Navbar />
                <SignupForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    userDetail={this.state.userDetail}
                    formErrors={this.props.data.signupErrors}
                    isFetching={this.props.data.awaitingResponse}
                    passwordMismatch={this.state.passwordMismatch}
                />
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
    return bindActionCreators({ signup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);