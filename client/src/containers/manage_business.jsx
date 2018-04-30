import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import businessActions from '../actions/business';
import history from '../history';
import Navbar from '../components/navbar';
import BusinessBanner from '../components/business_banner';
import BusinessMetrics from '../components/business_metrics';
import Footer from '../components/footer';
import customStyles from '../css/style.css';
import profilePicture from '../assets/images/cameras.jpg';


/**
 * @class ManageBusiness
 * 
 * @extends {React.Component}
 */
class ManageBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
        
    }

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof AllBusinessesComponent
    */
   componentWillMount() {
    const { dispatch, match } = this.props;
    axios.get(`https://weconnect-main.herokuapp.com/api/v1/businesses/${match.params.businessId}`)
        .then((response) => {
            const business = response.data.business
            dispatch(businessActions.getBusiness(business));
        })
        .catch((error) => {
            if (error.response.status === 404) {
            dispatch(businessActions.notFound());
            }
        });
}

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof ManageBusiness Component
    */
    render() {
        const business = this.props.data.business;
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
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s6">
                                <Link to= {`/businessDelete/${business.id}`} class="btn red right">
                                    Delete Business
                                 </Link>
                            </div>
                            <div class="col s6">
                               <button class="btn green darken-4 left">
                                <Link to= {`/businessUpdate/${business.id}`}  >
                                    Update Business
                                 </Link>
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

export default connect(mapStateToProps)(ManageBusiness);;