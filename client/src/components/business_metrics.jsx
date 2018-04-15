import React, { Component } from 'react';

import PropTypes from 'prop-types';

/**
 * @description BusinessMetricsComponent
 * 
 * @extends {React.Component}
 */
class BusinessMetrics extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessMetricsComponent
    */
    render() {
        const business = this.props.businessObject;
        return (
            <div className="row top-pad">
           <div className="col s10 offset-s1  ">
               <h3 className="center green-text text-darken-4">Your Business Metrics</h3>
               <p className=''>
                   <h5 className="center-align green-text">See how many times your business has been viewed over time!</h5>
               </p>
           </div>
           <div className="row container">
               <div className="col s12 m4 l3 offset-l1 center-align">
                   <h4> Today </h4>
                   <div className="thin-border">
                       <h3 className="pink-text text-darken-4">12</h3>
                       <h4> Views </h4>
                   </div>
               </div>
               <div className="col s12 m4 l3 offset-l1 center-align">
                   <h4> This week </h4>
                   <div className="thin-border">
                       <h3 className="pink-text text-darken-4">98</h3>
                       <h4> Views </h4>
                   </div>
               </div>
               <div className="col s12 m4 l3 offset-l1 center-align">
                   <h4> This month </h4>
                   <div className="thin-border">
                       <h3 className="pink-text text-darken-4">320</h3>
                       <h4> Views </h4>
                   </div>
               </div>
               <div className="col s12 m4 l3 offset-l1 center-align">
                   <h4> This year </h4>
                   <div className="thin-border">
                       <h3 className="pink-text text-darken-4">1200</h3>
                       <h4> Views </h4>
                   </div>
               </div>
               <div className="col s12 m4 l3 offset-l1 center-align">
                   <h4> All time </h4>
                   <div className="thin-border">
                       <h3 className="pink-text text-darken-4">9800</h3>
                       <h4> Views </h4>
                   </div>
               </div>
           </div>
       </div>
        )

    }
}


BusinessMetrics.propTypes = {
    businessObject: PropTypes.object.isRequired,
}
export default BusinessMetrics;