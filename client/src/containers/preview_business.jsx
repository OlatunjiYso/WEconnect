import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavItem, Dropdown, Button } from 'react-materialize';

import businessActions from '../actions/business';
import history from '../history';
import Navbar from '../components/navbar';
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
 * @class BusinessPreviewComponent
 * 
 * @extends {React.Component}
 */
class BusinessPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.backToForm = this.backToForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessPreviewComponent
    */
   componentDidMount() {
    const { dispatch, match } = this.props;
}

    /** 
    *@description takes user back to form
    *
    * @returns {func} funtion
    * 
    * @memberof BusinessPreviewComponent
    */
    backToForm(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const trialBusiness = this.props.data.trialBusiness;
    console.log(trialBusiness);
    history.push('/businessRegistration');
    dispatch(businessActions.previewBusiness(trialBusiness))
    

    }

    /** 
    *@description submits business deatail for creation.
    *
    * @returns {undefined} undefined
    * 
    * @memberof BusinessPreviewComponent
    */
    handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const trialBusiness = this.props.data.trialBusiness;
    dispatch(businessActions.createAttempt());
    axios.post('https://weconnect-main.herokuapp.com/api/v1/businesses', (trialBusiness))
            .then((response) => {
                dispatch(businessActions.createSuccess())
                history.push('/userProfile');
            })
            .catch((error) => {
                console.log(error.response);
                if (error && error.response.status === 400) {
                    dispatch(businessActions.badRequest(error.response.data.errors))
                }
                if (error && error.response.status === 409) {
                dispatch(businessActions.conflict(error.response.data.message))
                }
            });

    }


    /** 
    *
    * @returns {jsx} - a rendered view of the business before persisting to the database
    * 
    * @memberof BusinessPreviewComponent
    */
    render() {
        const business = this.props.data.trialBusiness;
        const {myReviews} = this.props.data
        return (
            <div>
                <main>
                    <BusinessBanner businessObject={business} pic={profilePicture} />
                    <BusinessBody businessObject={business} />
                    <div className="row body-font container">
                    <ReviewForm review= {myReviews}/>
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
                    <div id= "decision" className= "container all-borders bottom-gap">
                        <h5 className="bottom-gap brown-text">
                          The above is how your business page would eventually look when published. You can go back to the form to make changes. Click the actions buttons as appropriate to proceed.
                        </h5>
                        <div className= "row bottom-gap">
                            <div className="col m6 left-align">
                               <button className= "green darken-2 btn" onClick= {this.backToForm}>
                                       Back to Form
                               </button>
                            </div>
                            <div className= "col m6 right-align">
                               <button className= "green darken-2 btn" onClick= {this.handleSubmit}>
                                    Create My business
                                </button>
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

export default connect(mapStateToProps)(BusinessPreview);