import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import history from '../history';
import authAction from '../actions/auth';
import Footer from '../components/footer';
import SignupForm from '../components/signup_form';
import Navbar from '../components/navbar';

import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';

const rootUrl = 'http://localhost:3000/api/v1';

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
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    /**
     * 
    * @memberof SignUpComponent
    * 
    * @returns {void} void
    */
    componentDidMount() {
        console.log('I mounted galantly!')
        console.log(history.location)
    }

    /**
    * @description - redirects newly registered users to on-boarding page
    *
    * @return {void} no return or void
    * 
    */
    /*componentWillMount() {
        if (this.props.userActions.authenticated) {
            this.props.history.push('/welcome');
        }
    }*/

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
            userDetail: { ...this.state.userDetail, [name]: value }
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
        event.preventDefault();
        const { dispatch } = this.props;
        const newUser = this.state.userDetail;
        if (newUser.confirmPassword !== newUser.password) {
            dispatch(authAction.passwordMismatch())
            return
        }
        dispatch(authAction.signupAttempt())
        axios.post('https://weconnect-main.herokuapp.com/api/v1/auth/signup', newUser)
          .then((response) => {
            dispatch(authAction.signupSuccess(newUser))
              history.push('/welcome', { user: 'user' })
            return
          })
          .catch((error) => {
              console.log(error)
            if (error && error.response.status === 400) {
                dispatch(authAction.signupBadRequest(error.response.data.errors))
            }
            if (error && error.response.status === 409) {
            dispatch(authAction.signupConflict(error.response.data.message))
            }
          });
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
            <div>
                <Navbar />
                <SignupForm
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    userDetail = {this.state.userDetail}
                    formErrors = {this.props.data.errors}
                    isFetching = {this.props.data.awaitingResponse}
                />
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    const data = state.authReducers;
    return {
        data
    }
}

/**const mapDispatchToProps = dispatch => {
   
  }**/

export default connect(mapStateToProps)(Signup);