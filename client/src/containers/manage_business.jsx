import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { NavItem, Dropdown, Button } from 'react-materialize';
import Navbar from '../components/navbar';
import BusinessBanner from '../components/business_banner';
import BusinessMetrics from '../components/business_metrics';
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
 * @class ManageBusiness
 * 
 * @extends {React.Component}
 */
class ManageBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business
        };
    }

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof ManageBusiness Component
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
                    <BusinessMetrics businessObject={business} />

                    <div className="row body-font container">
                        <div className="top-pad-much">
                            <div className="col s10 offset-s1">
                                <h4 className="left-align green-text text-darken-4"> What Your Clients are saying</h4>
                                <div className="row black-text ">
                                    {myReviews}
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s6">
                                <Link to="#!" class="btn red right">
                                    Delete Business
                                 </Link>
                            </div>
                            <div class="col s6">
                                <Link to="#!" class="btn green darken-4 left">
                                    Update Business
                                 </Link>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

export default ManageBusiness;