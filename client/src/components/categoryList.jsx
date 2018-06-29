import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Input } from 'react-materialize';

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
        const profilePicture = this.props.pic;
        const business = this.props.businessObject;
        return (
            <div className="row dashboard">
                <div className="col offset-s3 s6 l2 m2 logo center-align">
                    <img className="responsive-img left" src={profilePicture} alt="profilepic" />
                </div>
                <div className="col s12 m7 center-align">
                    <h3 className="green-text text-darken-4">{business.name}</h3>
                    <h5 className="green-text text-darken-1"> {business.address}</h5>
                    <h6 className="Sofia pink-text text-darken-2">
                        <em>{business.slogan} </em>
                    </h6>
                </div>
                <div className="col s12 m3 center-align">
                    <h6 className="col s12">
                        <i className="material-icons tiny green-text text-darken-4" id="icon-text">phone</i>
                        <span className="black-text text-darken-4 body-font">{business.phone} </span>
                    </h6>

                    <h6 className="col s12">
                        <i className="material-icons tiny green-text text-darken-4" id="icon-text">mail</i>
                        <span className="body-font">{business.email}</span>
                    </h6>
                </div>
            </div>
            
        )

    }
}


BusinessBanner.propTypes = {
    businessObject: PropTypes.object.isRequired,
}
export default BusinessBanner;