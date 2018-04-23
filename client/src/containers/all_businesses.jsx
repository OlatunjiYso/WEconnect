import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import history from '../history';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import businessActions from '../actions/business';
import BusinessCatalogTop from '../components/business_catalog_top';
import BusinessCard from '../components/business_card';
import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';
import profilePicture from '../assets/images/cameras.jpg';
import biz from '../dummy/all_businesses';

/**
 * @class AllBusinessComponent
 * 
 * @extends {React.Component}
 */
class AllBusinesses extends Component {
    constructor(props) {
        super(props);
    }
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof AllBusinessesComponent
    */
    componentDidMount() {
        const { dispatch } = this.props;
        axios.get('https://weconnect-main.herokuapp.com/api/v1/businesses')
            .then((response) => {
                const businesses = response.data.businesses
                dispatch(businessActions.getAllBusinesses(businesses));
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const fakeBusiness = biz;
        const realBusiness = this.props.data.businesses
        const FoundBusinesses = realBusiness.map((eachBusiness, index) => {
            return (
                <BusinessCard key={index} business={eachBusiness} businesssPic={profilePicture} />
            )
        })
        return (
            <div>
                <Navbar />
                <main>
                <BusinessCatalogTop filter= {this.props.data.filter} />
                    <div className="row cushion center">   
                        { FoundBusinesses }
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

export default connect(mapStateToProps)(AllBusinesses);