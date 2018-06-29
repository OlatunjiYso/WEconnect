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
        const { heading1, heading2 } = this.props.businessObject
        const { body1, body2 } = this.props.businessObject
        const allSections = [];
        if (heading1 !== null) {
            const section = {};
            section.heading = heading1;
            section.body = body1;
            allSections.push(section)
        }
        if (heading2 !== null) {
            const section = {};
            section.heading = heading2;
            section.body = body2;
            allSections.push(section)
        }
        const presentation = allSections.map((each, index) => {
            return (
                <div key= {index} className="col s10 offset-s1">
                    <h4 className="center green-text text-darken-3">{each.heading}</h4>
                    <p className="padded-body  grey lighten-5">
                        {each.body}
                    </p>
                </div>
            );
        })
        return (
            <div className="row top-pad">
                { presentation }
            </div>
        )
    }
}

BusinessBody.propTypes = {
    businessObject: PropTypes.object.isRequired,
}

export default BusinessBody;
