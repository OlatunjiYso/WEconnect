import React from 'react';
import PropTypes from 'prop-types';



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
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };