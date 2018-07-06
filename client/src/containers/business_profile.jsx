import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchThisBusiness } from '../actions/business';
import Navbar from './nav';
import BusinessBanner from '../components/businessBanner';
import BusinessBody from '../components/business_body';
import ReviewForm from './review_form';
import Footer from '../components/footer';
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
    *@description runs on page load
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
                    <BusinessBanner business={business} />
                    <BusinessBody businessObject={business} />
                    <div className="row body-font">
                        <ReviewForm businessId= {id}/>
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