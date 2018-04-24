import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import setToken from '../helpers/authorization';
import history from '../history';
import authAction from '../actions/auth';
import Navbar from '../components/navbar';
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
        console.log('mounted')
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
        const user = this.state.user;
        const { dispatch } = this.props;
        event.preventDefault();
        dispatch(authAction.signinAttempt());
        axios.post('https://weconnect-main.herokuapp.com/api/v1/auth/login', (user))
            .then((response) => {
                dispatch(authAction.signinSuccess())
               // localStorage.clear();
                setToken(response.data.token)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('username', response.data.username);
                console.log(localStorage);
                history.push('/');
            })
            .catch((error) => {
                console.log(error.response.data.message);
                dispatch(authAction.signinFailed(error.response.data.message));
            });
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
            </div >
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

export default connect(mapStateToProps)(Login);