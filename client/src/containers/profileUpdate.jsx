import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";

import { changePassword, changeDetails } from "../actions/user";
import Footer from "../components/footer";
import UserUpdateForm from "../components/userUpdateForm";
import Navbar from "./nav";

/**
 * @class ProfileUpdateComponent
 *
 * @extends {React.Component}
 */
class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    const { username, email } = this.props.userData.user;
    this.state = {
      updated: {
        username,
        email,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      },
      case: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
    this.submitDetails = this.submitDetails.bind(this);
    this.switchForm = this.switchForm.bind(this);
  }

  /**
   * @description handles changes in form fields
   *
   * @method handleChange
   * @param {event} event object
   *
   * @memberof ProfileUpdate Component
   *@returns {func} funtion
   *
   */
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      updated: { ...this.state.updated, [name]: value }
    });
  }

  /**
   * @description switch between password or user update form
   *
   * @method switchForm
   * @param {event} event object
   *
   * @memberof ProfileUpdate Component
   *@returns {func} funtion
   *
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
      });
    }
  }

  /**
   * @description persists new user details
   *
   * @method submitDetails
   * @param {event} event object
   *
   * @memberof ProfileUpdate Component
   *@returns {func} funtion
   *
   */
  submitDetails(event) {
    event.preventDefault();
    const { id } = this.props.userData.user;
    this.props.changeDetails(id, this.state.updated);
  }

  /**
   * @description persists new user password
   *
   * @method submitPassword
   * @param {event} event object
   *
   * @memberof ProfileUpdate Component
   *@returns {func} funtion
   *
   */
  submitPassword(event) {
    event.preventDefault();
    this.props.changePassword(this.state.updated);
  }

  /**
   * @description renders a page for user detail updates
   * @method render
   *
   * @memberof ProfileUpdate component
   * @returns { jsx } user update page
   */
  render() {
    const { awaitingResponse, response } = this.props.data;
    const { updated } = this.state;
    return (
      <div id="profileUpdate">
        <Navbar />
        <UserUpdateForm
          handleChange={this.handleChange}
          updateUser={this.submitDetails}
          submitPassword={this.submitPassword}
          switchForm={this.switchForm}
          isFetching={awaitingResponse}
          response={response}
          updated={updated}
          formNumber={this.state.case}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const data = state.userReducer;
  const userData = state.authReducers;
  return {
    data,
    userData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changePassword, changeDetails }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileUpdate);
