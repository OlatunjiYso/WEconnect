import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { NavItem, Dropdown, Button } from 'react-materialize';
import Navbar from '../components/navbar';
import BusinessBanner from '../components/business_banner';
import BusinessBody from '../components/business_body';
import ReviewForm from '../components/review_form';
import Review from '../components/review';
import Footer from '../components/footer';
import customStyles from '../css/style.css';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import whatsapp from '../assets/images/whatsapp.png';
import instagram from '../assets/images/instagram.png';
import profilePicture from '../assets/images/cameras.jpg';
import business from '../dummy/one_business';
import businessReviews from '../dummy/reviews';

/**
 * @class BusinessProfileComponent
 * 
 * @extends {React.Component}
 */
class BusinessProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business,
            reviewMessage: ''
        };
    }

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessProfileComponent
    */
    render() {
        const business = this.state.business;
        const myReviews = businessReviews.map((PresentReview, index) => {
            return (
                <Review key={index} review={PresentReview} />
            )
        })
        return (
            <div>
                <Navbar />
                <main>
                    <BusinessBanner businessObject={business} pic={profilePicture} />
                    <BusinessBody businessObject={business} />

                    <div className="row body-font container">
                    <div className="top-pad-much">
                        <div className="col s10 offset-s1">
                            <h4 className="left-align green-text text-darken-4"> What Our Clients are saying</h4>
                                <ReviewForm />
                                <div className="row black-text ">
                                    {myReviews}
                                </div>
                            </div>
                        </div>

                        <div className="col s10 offset-s1 m10 offset-m1 ">
                            <h5 className="grey-text text-darken-3 bottom-pad-small"> Contact Us</h5>
                            <div className="row">
                                <div className="col s3 m1">
                                    <Link to="#!">
                                        <img className="responsive-img left" src={facebook} />
                                    </Link>
                                </div>
                                <div className="col s3 m1 offset-m1">
                                    <Link to="#!">
                                        <img className="responsive-img left" src={instagram} />
                                    </Link>
                                </div>
                                <div className="col s3 m1 offset-m1">
                                    <Link to=" #!">
                                        <img className="responsive-img left" src={twitter} />
                                    </Link>
                                </div>
                                <div className="col s3 m1 offset-m1">
                                    <Link to="#!">
                                        <img className="responsive-img left" src={whatsapp} />
                                    </Link>
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

export default BusinessProfile;