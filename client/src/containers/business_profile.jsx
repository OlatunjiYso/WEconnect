import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavItem, Dropdown, Button } from 'react-materialize';

import businessActions from '../actions/business';
import history from '../history';
import Navbar from './nav';
import BusinessBanner from '../components/business_banner';
import BusinessBody from '../components/business_body';
import ReviewForm from '../components/review_form';
import Footer from '../components/footer';
import customStyles from '../css/style.css';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import whatsapp from '../assets/images/whatsapp.png';
import instagram from '../assets/images/instagram.png';
import profilePicture from '../assets/images/cameras.jpg';
import business from '../dummy/one_business';

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
    * @memberof AllBusinessesComponent
    */
    componentDidMount() {
        const { dispatch, match } = this.props;
        axios.get(`https://weconnect-main.herokuapp.com/api/v1/businesses/${match.params.businessId}`)
            .then((response) => {
                const business = response.data.business
                dispatch(businessActions.getBusiness(business));
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    dispatch(businessActions.notFound());
                    history.push('/businesses')
                }
            });
    }

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessProfileComponent
    */
    render() {
        const { match } = this.props;
        const id = match.params.businessId;
        const business = this.props.data.business;
        const { myReviews } = this.props.data
        return (
            <div>
                <Navbar />
                <main>
                    <BusinessBanner businessObject={business} pic={profilePicture} />
                    <BusinessBody businessObject={business} />
                    <div className="row body-font container">
                        <ReviewForm review={myReviews} businessId= {id}/>
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

const mapStateToProps = (state) => {
    const data = state.businessReducer;
    return {
        data
    }
}

export default connect(mapStateToProps)(BusinessProfile);