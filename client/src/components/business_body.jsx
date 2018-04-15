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
            <div className="row top-pad">
                <div className="col s10 offset-s1">
                    <h4 className="center green-text text-darken-3">{business.heading1}</h4>
                    <p className="padded-body  grey lighten-5">
                        {business.body1}
                    </p>
                </div>
                <div className="col s10 offset-s1 ">
                    <h4 className="center green-text text-darken-3">{business.heading2}</h4>
                    <p className="padded-body grey lighten-5">
                        {business.body2}
                    </p>
                </div>
                <div className="col s10 offset-s1">
                    <h4 className="center green-text text-darken-3">{business.heading3}</h4>
                    <p className=" padded-body  grey lighten-5">
                        {business.body3}
                    </p>
                </div>
            </div>
        )
    }
}

BusinessBody.propTypes = {
    businessObject: PropTypes.object.isRequired,
}

export default BusinessBody;
