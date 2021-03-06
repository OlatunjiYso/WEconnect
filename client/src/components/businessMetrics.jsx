import React from "react";
import PropTypes from "prop-types";

/**
 * @description renders the business analytics page
 * @function BusinessMetrics
 *
 * @param { null} non - no parameters yet
 *
 * @returns { jsx } jsx - displays top section of business page
 */
const BusinessMetrics = () => {
  return (
    <div className="row top-pad">
      <div className="col s10 offset-s1  ">
        <h3 className="center pink-text text-darken-2">
          Your Business Metrics
        </h3>
        <div className="">
          <h5 className="center-align pink-text text-darken-2">
            See how many times your business has been viewed over time!
          </h5>
        </div>
      </div>
      <div className="row container">
        <div className="col s12 m4 l3 offset-l1 center-align">
          <h4 className="grey-text text-darken-3"> today </h4>
          <div className="views-box">
            <h4 className="green-text text-darken-1">12</h4>
            <h4 className="grey-text text-darken-3"> views </h4>
          </div>
        </div>
        <div className="col s12 m4 l3 offset-l1 center-align">
          <h4 className="grey-text text-darken-3"> this week </h4>
          <div className="views-box">
            <h4 className="green-text text-darken-1"> 98 </h4>
            <h4 className="grey-text text-darken-3"> views </h4>
          </div>
        </div>
        <div className="col s12 m4 l3 offset-l1 center-align">
          <h4 className="grey-text text-darken-3"> this month </h4>
          <div className="views-box">
            <h4 className="green-text text-darken-1"> 320 </h4>
            <h4 className="grey-text text-darken-3"> views </h4>
          </div>
        </div>
        <div className="col s12 m4 l3 offset-l1 center-align">
          <h4 className="grey-text text-darken-3"> this year </h4>
          <div className="views-box">
            <h4 className="green-text text-darken-1"> 1200 </h4>
            <h4 className="grey-text text-darken-3"> views </h4>
          </div>
        </div>
        <div className="col s12 m4 l3 offset-l1 center-align">
          <h4 className="grey-text text-darken-3"> all time </h4>
          <div className="views-box">
            <h4 className="green-text text-darken-1"> 9800 </h4>
            <h4 className="grey-text text-darken-3"> views </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessMetrics;
