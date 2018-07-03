import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Nav from './nav';
import UserBusiness from '../components/user_business';
import { fetchMyBusinesses } from '../actions/business';
import profilePicture from '../assets/images/cameras.jpg';


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
    *@description runs call that fetches nusr business
    *
    *@returns {JSX} JSX
    * 
    * @memberof UserProfileComponent
    */
    componentDidMount() {
        this.props.fetchMyBusinesses();
    }
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof UserProfileComponent
    */
    render() {
        const { businessData } = this.props;
        const username = this.props.userData.user.username;

        // Generate an array of businesses if the user has any.
        const myBusinesses = (businessData.myBusinesses.length > 0) ?
            businessData.myBusinesses.map((business, index) => {
                return (
                    <UserBusiness key={index} userBusiness={business} businesssPic={profilePicture} />
                )
            }) : null;

        // Generate a suitable header if or not, user has businesses
        const sectionHeading = (businessData.myBusinesses.length > 0) ?
            <span> Feel free to manage your business outfits </span> :
            <span> You are yet to add a business </span>;

        return (
            <div>
                <Nav />
                <main>
                    <div className="row head-font dashboard bottom-gap">
                        <div className="col s12 logo pink-text center-align">
                            <h2 className="">
                                <span className="black-text"> Welcome to your dashboard, </span>
                                <span className="green-text text-darken-2">  {username} </span>
                            </h2>
                        </div>
                    </div>

                    <div className="row top-pad cushion">
                        <div className="col s10 offset-s2">
                        <div className="row">
                                <div className="col s12 m6 l3 right">
                                    <Link to="/registrationGuide" className="btn-edit btn">  Add Business
                                </Link>
                                </div>
                                <div className="col s12 m6 l3 left">
                                    <Link to="/updateProfile" className="btn-edit btn"> Update Profile
                                </Link>
                                </div>
                            </div>
                                <div className="col s12 container">
                                    <h4 className="head-font grey-text text-darken-1 bottom-pad-small">
                                        {sectionHeading}
                                    </h4>
                                </div>
                                <div className="row ">
                                    {myBusinesses}
                                </div>
                           
                        </div>
                        <div className="col s2 top-gap-much">
                           
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    const businessData = state.businessReducer;
    const userData = state.authReducers;
    return {
        businessData, userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchMyBusinesses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);