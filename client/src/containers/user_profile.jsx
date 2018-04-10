import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Navbar from '../components/navbar';
import UserBusiness from '../components/user_business';
import businesses from '../dummy/user_businesses';

import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';
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
        this.state = {businesses};
      }
    

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof UserProfileComponent
    */
    render() {
        const myBusinesses = this.state.businesses.map((business, index) => {
            return(
                <UserBusiness key={index} userBusiness={business} businesssPic= {profilePicture}/>
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
                                <Link to="register_business.html" className="green lighten-2 black-text btn" type="button"> Add new Business
                    </Link>
                            </div>
                            <div className="col s6">
                                <Link to="#!" className="right green lighten-2 black-text btn" type="button"> Update Profile
                    </Link>
                            </div>
                        </div>
                        <div className="col s12  l10 offset-l1">
                            <div className="row">
                                <div className="col s12">
                                    <h4 className="head-font center">
                                        Feel free to manage your business outfits!
                                    </h4>
                                </div>
                                <div className="row ">
                                   { myBusinesses }
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

export default UserProfile;