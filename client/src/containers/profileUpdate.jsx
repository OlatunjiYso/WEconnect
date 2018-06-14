import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { changePassword , changeDetails} from '../actions/user';
import Footer from '../components/footer';
import ProfileUpdateForm from '../components/profileUpdateForm';
import Navbar from './nav';
import customStyles from '../css/style.css';


/**
 * @class ProfileUpdateComponent
 * 
 * @extends {React.Component}
 */
class ProfileUpdate extends Component {
    /**
     * Creates an instance of SignUpComponent.
     * 
     * @param {string} props 
     * 
     * @memberof ProfileUpdateComponent
     */
    constructor(props) {
        super(props);
        this.state = {
            updated: {
                username: this.props.userData.user.username,
                email: this.props.userData.user.email,
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: '',
            },
            case: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitPassword = this.submitPassword.bind(this);
        this.submitDetails = this.submitDetails.bind(this);
        this.switchForm = this.switchForm.bind(this);
    }


    /** 
    *@param {event} event
    *
    *@returns {func} funtion
    *@memberof ProfileUpdate Component
    *
    */
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            ...this.state,
            updated: { ...this.state.updated, [name]: value }
        });
    }

    /**
     * 
     *@param {event} event
     * 
     *@returns {func} function
     *
     *@memberof ProfileUpdate Component
     */
    switchForm(event) {
        event.preventDefault();
        if (this.state.case >= 1) {
            this.setState({
                ...this.state,
                case: 0
            });
        } else {
            this.setState({
                ...this.state,
                case: this.state.case + 1
            })
        }
    }

    /**
      * 
      *@param {event} event
      * 
      *@returns {func} function
      *
      *@memberof ProfileUpdate Component
      */
    submitDetails(event) {
        
        event.preventDefault();
        const userId = this.props.userData.user.id;
        this.props.changeDetails(userId, this.state.updated)
    }

    /**
      * 
      *@param {event} event
      * 
      *@returns {func} function
      *
      *@memberof ProfileUpdate Component
      */
    submitPassword(event) {
        event.preventDefault();
        this.props.changePassword(this.state.updated)
    }

    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof ProfileUpdate Component
    */
    render() {
        return (
            <div id="profileUpdate">
                <Navbar />
                <ProfileUpdateForm
                    handleChange = {this.handleChange}
                    updateUser = { this.submitDetails }
                    submitPassword = {this.submitPassword}
                    switchForm = {this.switchForm}
                    formErrors = {this.props.data.errors}
                    isFetching = {this.props.data.awaitingResponse}
                    response = {this.props.data.response}
                    updated = {this.state.updated}
                    formNumber = {this.state.case}
                />
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.userReducer;
    const userData = state.authReducers;
    return {
        data, userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changePassword, changeDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);