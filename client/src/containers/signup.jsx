import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import Footer from '../components/footer';
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
            },
            submitted: false
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
        const value = event.target.value
        this.setState({
            ...this.state,
            userDetail: { [name]: value }
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
        const newUser = this.state.userDetail;
        axios.post('https://weconnect-main.herokuapp.com/', newUser )
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })

        event.preventDefault();
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
                <main>
                    <div className="row head-font top-pad-much no-bottom-gap">
                        <div className="col s8 offset-s2 m6 offset-m3 grees form-jacket">
                            <h4 className="center head-font form-heading"> Join WEconnect </h4>
                            <form onSubmit={this.handleSubmit}>
                                <label className="form-label">Firstname: </label>
                                <input type="text" value={this.state.userDetail.firstname} onChange={this.handleChange} name="firstname" className="form-input white" />
                                <label className="form-label">Lastname: </label>
                                <input type="text" value={this.state.userDetail.lastname} onChange={this.handleChange} name="lastname" className="form-input white" />
                                <label className="form-label">Email: </label>
                                <input type="email" value={this.state.userDetail.email} onChange={this.handleChange} name="email" className="form-input white" />
                                <label className="form-label">Username: </label>
                                <input type="text" value={this.state.userDetail.username} onChange={this.handleChange} name="username" className="form-input white" />
                                <label className="form-label"> Password: </label>
                                <input type="password" value={this.state.userDetail.password} onChange={this.handleChange} name="password" className="form-input white" />
                                <label className="form-label"> Confirm Password: </label>
                                <input type="password" value={this.state.userDetail.confirmpassword} onChange={this.handleChange} name="confirmpassword" className="form-input white" />
                                <input type="submit" value="Submit" className="form-btn" />
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

export default Signup;