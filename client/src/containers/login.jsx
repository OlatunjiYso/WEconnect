import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Navbar from '../components/navbar';
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
            userDetail: {
                username: '',
                password: '',
            },
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {

    }

    /** 
    *
    *
    * @returns {func} funtion
    * 
    * @memberof ReviewFormComponent
    */
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            ...this.state,
            userDetail: { [name]: value},
            submitted: true
        });
    }

    /** 
    *
    *
    * @returns {func} funtion
    * 
    * @memberof Login Component
    */
    handleSubmit(event) {
        alert('A new login has been made: ' + this.state.userDetail.username);
        event.preventDefault();
    }

    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof LoginComponent
    */
    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <div className="row head-font top-pad-much no-bottom-gap">
                        <div className="col s8 offset-s2 m6 offset-m3 grees form-jacket">
                            <h4 className="center head-font form-heading"> Sign In </h4>
                            <form onSubmit={this.handleSubmit}>
                                <label className="form-label">Username: </label>
                                <input type="text" value={this.state.userDetail.username} onChange={this.handleChange} name= "username" className="form-input white" />
                                <label className="form-label"> Password: </label>
                                <input type="password" value={this.state.userDetail.password} onChange={this.handleChange} name= "password"className="form-input white" />
                                <input type="submit" value="Submit" className="form-btn"/>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

export default Login;