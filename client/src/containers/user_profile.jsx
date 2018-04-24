import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import history from '../history';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import UserBusiness from '../components/user_business';
import businesses from '../dummy/user_businesses';
import businessActions from '../actions/business';
import customStyles from '../css/style.css';
import profilePicture from '../assets/images/cameras.jpg';

const username = 'Olatunji';

/**
 * @class UserProfileComponent
 * 
 * @extends {React.Component}
 */
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { businesses };
    }

    /** 
    * 
    *@description Does authentication
    *
    *@returns {JSX} JSX
    * 
    * @memberof UserProfileComponent
    */
    componentWillMount() {
        if (localStorage.token) {
            console.log(localStorage.token)
          }
        else {
            console.log('you aint logged in');
        }
        const { dispatch } = this.props;
        axios.get('https://weconnect-main.herokuapp.com/api/v1/auth/myBusiness')
            .then((response) => {
                const businesses = response.data.businesses
                dispatch(businessActions.gotMyBusinesses(businesses));
                console.log('found some businesse for you');
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    history.push('/Login'); // Flash a message telling user to signin
                    console.log('unauthorized bouncing');
                }
                if (error.response.status === 404) {
                    dispatch(businessActions.gotNoBusiness());
                    console.log('no business for the user');
                }
                console.log(error.response);
            });
    }
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof UserProfileComponent
    */
    render() {
        const username = localStorage.username
        const myBusinesses = this.state.businesses.map((business, index) => {
            return (
                <UserBusiness key={index} userBusiness={business} businesssPic={profilePicture} />
            )
        })
        return (
            <div>
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
                                <Link to="register_business.html" className="green lighten-5 black-text btn" type="button"> Add new Business
                                </Link>
                            </div>
                            <div className="col s6">
                                <Link to="#!" className="right green lighten-5 black-text btn" type="button"> Update Profile
                                </Link>
                            </div>
                        </div>
                        <div className="col s12  l10 offset-l1">
                            <div className="row">
                                <div className="col s12">
                                    <h4 className="head-font center grey-text text-darken-1 bottom-pad-small">
                                        Feel free to manage your business outfits
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

export default connect(mapStateToProps)(UserProfile);