import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import setToken from '../helpers/authorization';
import history from '../history';
import { login } from '../actions/auth';
import Navbar from './nav';
import LoginForm from '../components/loginForm';
import Footer from '../components/footer';
import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';

/**
 * @class LoginComponent
 * 
 * @extends {React.Component}
 */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('mounted galantly')
    }

    /** 
    *@description handles change in input field
    *
    * @returns {func} funtion
    * 
    * @memberof Login Component
    */
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            ...this.state,
            user: { ...this.state.user, [name]: value },
        });
    }

    /** 
    *@description sends data to server
    *
    * @returns {func} funtion
    * 
    * @memberof Login Component
    */
    handleSubmit(event) {
        event.preventDefault();
        const user = this.state.user;
        this.props.login(user)
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
                <Navbar />
                <LoginForm
                    user={this.state.user}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    isFetching={this.props.data.awaitingResponse}
                    errors={this.props.data.errors}
                />
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const data = state.authReducers;
    console.log(data);
    return {
        data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
