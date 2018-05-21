import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import history from '../history';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { fetchAllBusinesses } from '../actions/business';
import BusinessCatalogTop from '../components/business_catalog_top';
import BusinessCard from '../components/business_card';
import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';
import profilePicture from '../assets/images/cameras.jpg';

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
        this.props.fetchAllBusinesses();
    }

    /** 
    *@param {event} event
    *
    *@returns {func} funtion
    *@memberof SignupForm Component
    *
    */
    
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof AllBusinessesComponent
    */
    render() {
        const realBusiness = this.props.data.businesses
        const FoundBusinesses = realBusiness.map((eachBusiness, index) => {
            return (
                <BusinessCard key={index}
                    business={eachBusiness}
                    businesssPic={profilePicture}
                />
            )
        })
        return (
            <div>
                <Navbar />
                <main>
                    <BusinessCatalogTop filter={this.props.data.filter} />
                    <div className="row cushion center">
                        {FoundBusinesses}
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchAllBusinesses }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllBusinesses);