import React from 'react';
import PropTypes from 'prop-types';



const BusinessBanner = ({business}) => {
    const { image, name } = business;
    return (
      
);}

export default BusinessBanner;

BusinessBanner.propTypes = {
    business: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };