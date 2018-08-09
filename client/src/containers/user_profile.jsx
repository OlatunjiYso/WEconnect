import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import history from '../history';
import Footer from "../components/footer";
import Nav from "./nav";
import UserBusiness from "../components/userBusiness";
import { fetchMyBusinesses } from "../actions/business";

/**
 * @class UserProfileComponent
 *
 * @extends {React.Component}
 */
class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  /**
   *
   *@description runs call that fetch user businesses
   *
   *@returns {func} function
   *
   * @memberof UserProfileComponent
   */
  componentDidMount() {
    if (!localStorage.token) {
      history.push('/');
    }
    this.props.fetchMyBusinesses();
  }

  /**
   * @description renders the user profile page
   * @method render
   *
   * @memberof BusinessRegForm component
   * @returns { jsx } business registration page
   */
  render() {
    const { businessData, userData } = this.props;
    const { myBusinesses } = businessData;
    const { username } = userData.user;

    // Generate an array of businesses if the user has any.
    const allMyBusinesses =
      myBusinesses.length > 0
        ? myBusinesses.map((business, index) => {
          return (
            <UserBusiness
              key={index}
              userBusiness={business}
            />
          );
        })
        : null;

    // Generate a suitable header if or not, user has businesses
    const sectionHeading =
      myBusinesses.length > 0 ? (
        <span> Feel free to manage your business outfits </span>
      ) : (
          <span> You are yet to add a business </span>
        );

    return (
      <div>
        <Nav />
        <main>
          <div className="row body-font dashboard bottom-gap">
            <div className="col s12 logo pink-text center-align">
              <h2 className="hide-on-small-only mid-bottom-gap">
                <span className="black-text"> Welcome to your dashboard, </span>
                <span className="green-text text-darken-2"> {username} </span>
              </h2>
              <h4 className="hide-on-med-and-up mid-bottom-gap">
                <span className="black-text"> Hi, </span>
                <span className="green-text text-darken-2"> {username} </span>
              </h4>
            </div>
            <div className="row container center push-down ">
              <Link to="/registrationGuide" className="btn-edit btn" id="addBusiness">
                {" "}
                {myBusinesses.length > 0 ? 'Add Another Business' : 'Add Business'}
              </Link>
              <Link to="/updateProfile" className="btn-edit btn" id="updateProfile">
                {" "}
                Update Profile
              </Link>
            </div>
          </div>
          <div className="row top-pad container">
            <div className="col s12">
              <div className="col s12 container">
                <h4 className="hide-on-small-only head-font grey-text text-darken-2 bottom-pad-small center">
                  {sectionHeading}
                </h4>
                <h5 className="hide-on-med-and-up head-font grey-text text-darken-2 bottom-pad-small center">
                  {sectionHeading}
                </h5>
              </div>
              <div className="row ">{allMyBusinesses}</div>
            </div>
            <div className="col s2 top-gap-much" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const businessData = state.businessReducer;
  const userData = state.authReducers;
  return {
    businessData,
    userData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchMyBusinesses }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
