import React, { Component } from 'react';

import PropTypes from 'prop-types';

/**
 * @description BusinessBodyComponent
 * 
 * @extends {React.Component}
 */
class BusinessBody extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessBodyComponent
    */
    render() {
        const business = this.props.businessObject;
        return (
            <div>
                <div className="row">
                    <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3 container">
                        <h4 className=" left-align pink-text text-darken-4"> About Us </h4>
                        <p className="business-body grey lighten-5">
                        {business.about}
                    </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3 container">
                        <h4 className=" left-align pink-text text-darken-4"> Contact Us </h4>
                        <div className="business-contact-body grey lighten-5 row">
                            <div className="row ">
                                <div className="col s2 business-icons center">
                                    <i class="material-icons small pink-text text-darken-2 ">home</i>
                                </div>
                                <div className="col s10 business-contact lighten-3">
                                    <h6> {business.address} </h6>
                                    <h5> {business.city}, {business.state} </h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s2 business-icons center">
                                    <i class="material-icons small pink-text text-darken-2 ">email</i>
                                </div>
                                <div className="col s10 business-contact lighten-3">
                                    <h5>  {business.email}  </h5>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col s2 business-icons center">
                                    <i class="material-icons small pink-text text-darken-2"> phone </i>
                                </div>
                                <div className="col s10 business-contact lighten-3">
                                    <h5> {business.phone} </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

BusinessBody.propTypes = {
    businessObject: PropTypes.object.isRequired,
}

export default BusinessBody;
