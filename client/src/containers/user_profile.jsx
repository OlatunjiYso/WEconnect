import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import setToken from '../helpers/authorization';
import history from '../history';
import Footer from '../components/footer';
import Nav from './nav';
import UserBusiness from '../components/user_business';
import { fetchMyBusinesses } from '../actions/user';
import customStyles from '../css/style.css';
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
        const username = localStorage.username
        const data =  this.props.data;

        // Generate an array of businesses if the user has any.
        const myBusinesses = (data.gotBusinesses) ? 
        data.myBusinesses.map((business, index) => {
            return (
                <UserBusiness key={index} userBusiness={business} businesssPic={profilePicture} />
            )
        }) : null;
        
        // Generate a suitable header if or not, user has businesses
        const sectionHeading = (data.gotBusinesses) ? 
        <span> Feel free to manage your business outfits </span> : 
        <span> You are yet to add a business </span> ;

        return (
            <div>
                <Nav />
                <main>
                    <div className="row head-font dashboard">
                        <div className="col s9 m6 l4 logo pink-text center-align">
                            <h2 className="Sofia"> Hi, {username} </h2>
                        </div>
                        <div className="col s3 m2 offset-m4 l2 offset-l6 ">
                            <img className="responsive-img" src={profilePicture} alt='profilepic' />
                        </div>
                    </div>

                    <div className="row slim-container top-pad">
                        <div className="row">
                            <div className="col s6 left">
                                <Link to="/registrationGuide" className="green lighten-5 black-text btn" type="button"> Add new Business
                                </Link>
                            </div>
                            <div className="col s6">
                                <Link to="/updateProfile" className="right green lighten-5 black-text btn" type="button"> Update Profile
                                </Link>
                            </div>
                        </div>
                        <div className="col s12  l10 offset-l1">
                            <div className="row">
                                <div className="col s12">
                                    <h4 className="head-font center grey-text text-darken-1 bottom-pad-small">
                                        {sectionHeading}
                                    </h4>
                                </div>
                                <div className="row ">
                                    {myBusinesses}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.businessReducer;
    console.log(data);
    return {
        data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchMyBusinesses }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);