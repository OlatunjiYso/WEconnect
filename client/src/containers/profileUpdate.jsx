import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';

import { changePassword , changeDetails} from '../actions/user';
import history from '../history';
import authAction from '../actions/auth';
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
                username: '',
                email: '',
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: '',
            },
            case: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitPassword = this.submitPassword.bind(this);
        this.submitDetails = this.submitDetails.bind(this);
        this.submitPicture = this.submitPicture.bind(this);
        this.switchCase = this.switchCase.bind(this);
        this.getu = this.getu.bind(this);
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
        console.log('i got here')
        console.log(updated)
        event.preventDefault();
        const userId = this.locaStorage.id;
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
    getu(event) {
        event.preventDefault();
        alert(this.state.updated.newPassword);
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
      *@param {event} event
      * 
      *@returns {func} function
      *
      *@memberof ProfileUpdate Component
      */
    submitDetails(event) {
        event.preventDefault();
        this.props.changeDetails(this.state.updated)
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
                    handleChange = {this.handleChange}
                    updateUser = { this.submitDetails }
                    submitPassword = {this.submitPassword}
                    submitPicture = {this.submitPicture}
                    switchCase = {this.switchCase}
                    formErrors = {this.props.data.errors}
                    isFetching = {this.props.data.awaitingResponse}
                    updated = {this.state.updated}
                    presentCase = {this.state.case}
                    getu ={ this.getu}
                />
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = (state) => {

    const data = state.userReducer;
    return {
        data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changePassword, changeDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdate);