import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchThisBusiness } from '../actions/business';
import businessActions from '../actions/business';
import history from '../history';
import Navbar from './nav';
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
    const businessId = this.props.match.params.businessId;
    this.props.fetchThisBusiness(businessId);
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
                        <div className="row top-pad">
                            <div className="col s12 m6">
                                <Link to= {`/businessDelete/${business.id}`} className="btn btn-large grey lighten-5 right red-text text-darken-4">
                                    Delete Business
                                 </Link>
                            </div>
                            <div className="col s12 m6">
                               <button className="btn btn-large grey lighten-4 left">
                                <Link to= {`/businessUpdate/${business.id}`}  className= "green-text text-darken-4">
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchThisBusiness }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(ManageBusiness);;