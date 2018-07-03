import React, { Component } from 'react';

import PropTypes from 'prop-types';

/**
 * @description BusinessBannerComponent
 * 
 * @extends {React.Component}
 */
class BusinessBanner extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessBannerComponent
    */
    render() {
        const business = this.props.businessObject;
        return (
            <div className="row center-align">
                <div className="col s10 offset-s1 m6 offset-m3  business-hero">
                    <img className="responsive-img" src={business.image} alt="profilepic" />
                </div>
                <div className="col s10 offset-s1 m6 offset-m3 ">
                    <h2 className="green-text text-darken-4">{business.name}</h2>
                </div>
            </div>    
        )
    }
}


BusinessBanner.propTypes = {
    businessObject: PropTypes.object.isRequired,
}
export default BusinessBanner;