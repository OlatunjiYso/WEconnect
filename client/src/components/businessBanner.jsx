import React from 'react';
import PropTypes from 'prop-types';


/**
 * @description renders the top section of a business page
 * @function BusinessBanner
 * 
 * @param { object } business - business object to be rendered
 * 
 * @returns { jsx } jsx - displays top section of business page
 */
const BusinessBanner = ({business}) => {
    const { image, name } = business;
    return (
      <div className="row center-align">
                <div className="col s10 offset-s1 m6 offset-m3  business-hero">
                    <img className="responsive-img" src={ image } alt="profilepic" />
                </div>
                <div className="col s10 offset-s1 m6 offset-m3 ">
                    <h2 className="green-text text-darken-4">{ name }</h2>
                </div>
      </div>    
);}

export default BusinessBanner;

BusinessBanner.propTypes = {
    business: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };
  