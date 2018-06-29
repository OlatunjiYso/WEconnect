import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Footer from '../components/footer';
import Navbar from './nav';
import { fetchAllBusinesses } from '../actions/business';
import BusinessCatalogTop from '../components/business_catalog_top';
import BusinessCard from '../components/business_card';

/**
 * @class AllBusinessComponent
 * 
 * @extends {React.Component}
 */
class AllBusinesses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                state: "location",
                category: "category",
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof AllBusinessesComponent
    */
    componentWillMount() {
        const defaultFilter = {
            state: "location",
            category: "category",
        }
        const {landingPageFilter} = this.props.landingPageData;
        if (landingPageFilter.category) {
            this.props.fetchAllBusinesses(landingPageFilter);
        } else {
            this.props.fetchAllBusinesses(defaultFilter);
        }
    }

    /** 
    *@description handles change in input field
    *@param {event} event
    *
    *@returns {func} funtion
    *@memberof AllBusinessComponent Component
    *
    */
    handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            ...this.state,
            filter: { ...this.state.filter, [name]: value },
        }); 
    }

    /** 
       *@description sends businessData to server
       *
       * @returns {func} funtion
       * 
       * @memberof AllBusinessComponent Component;
       */
    handleSubmit(event) {
        event.preventDefault();
        const filter = this.state.filter;
        this.props.fetchAllBusinesses(filter)
    }

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof AllBusinessesComponent
    */
    render() {
        const businessList = this.props.businessData.businesses

        const FoundBusinesses = (businessList.length > 0) ? businessList.map((eachBusiness, index) => {
            return (
                <BusinessCard
                    key={index}
                    business={eachBusiness}
                />
            )
        }) : <h4> No business found </h4>
        return (
            <div>
                <Navbar />
                <main>
                    <BusinessCatalogTop 
                    proposedFilter = {this.state.filter}
                    selectedFilter={this.props.businessData.filter}
                    handleChange = {this.handleChange} 
                    handleSubmit = {this.handleSubmit}
                    businessList = {this.props.businessData.businesses}
                     />
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
    const businessData = state.businessReducer;
    const landingPageData = state.landingPageReducer;
    return {
        businessData, landingPageData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchAllBusinesses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBusinesses);