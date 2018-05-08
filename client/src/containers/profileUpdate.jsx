import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import history from '../history';
import authAction from '../actions/auth';
import Footer from '../components/footer';
import ProfileUpdateForm from '../components/profileUpdateForm';
import Navbar from './nav';

import customStyles from '../css/style.css';

const rootUrl = 'http://localhost:3000/api/v1';

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
                username: '',
                email: '',
                oldPassword: '',
                newPassword: '',
                confirmNewPassword: '',
            },
            case: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitPassword = this.submitPassword.bind(this);
        this.submitDetail = this.submitDetail.bind(this);
        this.submitPicture = this.submitPicture.bind(this);
        this.switchCase = this.switchCase.bind(this);
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
    switchCase(event) {
        event.preventDefault();
        if (this.state.case >= 2) {
            this.setState({
                ...this.state,
                case: 0
            });
        }else{
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
     submitPassword(event) {
        event.preventDefault();
        alert(` ${this.state.updated.newPassword} ${this.state.updated.confirmNewPassword}` )
    }

    /**
      * 
      *@param {event} event
      * 
      *@returns {func} function
      *
      *@memberof ProfileUpdate Component
      */
     submitDetail(event) {
        event.preventDefault();
        alert('Profile successfully modified')
    }

    /**
      * 
      *@param {event} event
      * 
      *@returns {func} function
      *
      *@memberof ProfileUpdate Component
      */
     submitPicture(event) {
        event.preventDefault();
        alert('Picture successfully modified!!')
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
            <div>
                <Navbar />
                <ProfileUpdateForm
                    handleChange={this.handleChange}
                    submitDetail={this.submitDetail}
                    submitPassword={this.submitPassword}
                    submitPicture={this.submitPicture}
                    switchCase={this.switchCase}
                    formErrors={this.props.data.errors}
                    isFetching={this.props.data.awaitingResponse}
                    updated = {this.state.updated}
                    presentCase = {this.state.case}
                />
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const data = state.authReducers;
    return {
        data
    }
}

export default connect(mapStateToProps)(ProfileUpdate);