import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "../actions/auth";
import Navbar from "./nav";
import LoginForm from "../components/loginForm";
import Footer from "../components/footer";

/**
 * @class LoginComponent
 *
 * @extends {React.Component}
 */
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        username: "",
        password: ""
      },
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   *@description handles change in input field
   *
   * @param {obj} event - event object
   *
   * @memberof Login Component
   * @returns {func} funtion
   */
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      userDetails: { ...this.state.userDetails, [name]: value }
    });
  }

  /**
   *@description sends data to server
   *
   * @param {obj} event - event object
   *
   * @memberof Login Component
   * @returns {func} funtion
   */
  handleSubmit(event) {
    event.preventDefault();
    const userDetails = this.state.userDetails;
    this.props.login(userDetails);
  }

  /**
   * @description renders the page for logging in
   * @method render
   *
   * @memberof Login component
   * @returns { jsx } login page
   */
  render() {
    const { awaitingResponse, signinErrors } = this.props.data;
    return (
      <div id="signinPage">
        <Navbar />
        <LoginForm
          user={this.state.userDetails}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isFetching={awaitingResponse}
          errors={signinErrors}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const data = state.authReducers;
  return {
    data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
