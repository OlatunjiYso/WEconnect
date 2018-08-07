import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import history from "../history";
import { signup } from "../actions/auth";
import Footer from "../components/footer";
import SignupForm from "../components/signupForm";
import Navbar from "./nav";

/**
 * @class SignupComponent
 *
 * @extends {React.Component}
 */
export class Signup extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userDetail: {
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        confirmPassword: ""
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
    if (localStorage.token) {
      history.push("/userProfile");
    }
  }

  /**
   * @description handles changes made to signup form
   * 
   * @param {event} event
   *
   * @memberof Signup Component
   * @returns {func} funtion
   *
   */
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      userDetail: { ...this.state.userDetail, [name]: value }
    });
  }

  /**
   * @description handles submitting signup form    
   * 
   * @param {event} event
   *
   * @memberof Signup Component
   * @returns {func} funtion
   *
   */
  handleSubmit(event) {
    event.preventDefault();
    const newUser = this.state.userDetail;
    this.props.signup(newUser);
  }

 /**
   * @description renders a page for user signup
   * @method render
   *
   * @memberof Signup component
   * @returns { jsx } user signup page
   */
  render() {
    const { passwordMismatch, userDetail } = this.state;
    const { signupErrors, awaitingResponse } = this.props.data;
    return (
      <div id="signupPage">
        <Navbar />
        <SignupForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          user={userDetail}
          formErrors={signupErrors}
          isFetching={awaitingResponse}
          passwordMismatch={passwordMismatch}
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
  return bindActionCreators({ signup }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
