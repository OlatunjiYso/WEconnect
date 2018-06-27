import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchThisBusiness } from '../actions/business';
import Navbar from './nav';
import BusinessBanner from '../components/business_banner';
import BusinessBody from '../components/business_body';
import ReviewForm from './review_form';
import Footer from '../components/footer';
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
        const { businessId } = this.props.match.params;
        this.props.fetchThisBusiness(businessId)   
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
        const business = this.props.businessData.business;
        return (
            <div>
                <main>
                    <Navbar />
                    <BusinessBanner businessObject={business} pic={profilePicture} />
                    <BusinessBody businessObject={business} />
                    <div className="row body-font container">
                        <ReviewForm businessId= {id}/>
                        <div className="col s10 offset-s1 m10 offset-m1 ">
                            <h5 className="grey-text text-darken-3 bottom-pad-small"> Contact Us</h5>
                            <div className="row">
                                <div className="col s2 m1">
                                    <Link to="#!">
                                        <img className="responsive-img left" src={facebook} />
                                    </Link>
                                </div>
                                <div className="col s2 m1 offset-m1">
                                    <Link to="#!">
                                        <img className="responsive-img left" src={instagram} />
                                    </Link>
                                </div>
                                <div className="col s2 m1 offset-m1">
                                    <Link to=" #!">
                                        <img className="responsive-img left" src={twitter} />
                                    </Link>
                                </div>
                                <div className="col s2 m1 offset-m1">
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
    const businessData = state.businessReducer;
    return {
        businessData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchThisBusiness }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessProfile);