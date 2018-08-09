import React from 'react';
import PropTypes from 'prop-types';


/**
 * @description renders the body section of a business page
 * @function BusinessBody
 * 
 * @param { object } props - object passed from parent component
 * 
 * @returns { jsx } jsx - displays body section of business page
 */
const BusinessBody = (props) => {
    const { about, address, state, city, email, phone } = props.business;
    return (
        <div>
        <div className="row">
          <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3 container">
            <h4 className="hide-on-small-only left-align pink-text text-darken-4"> About Us </h4>
            <h5 className="hide-on-med-and-up left-align pink-text text-darken-4"> About Us </h5>
            <p className="business-body grey lighten-5">{about}</p>
          </div>
        </div>
        <div className="row">
          <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3 container">
            <h4 className="hide-on-small-only left-align pink-text text-darken-4">
              Contact Us
            </h4>
            <h5 className="hide-on-med-and-up left-align pink-text text-darken-4">
              Contact Us
            </h5>
            <div className="business-contact-body grey lighten-5 row">
              <div className="row ">
                <div className="col s2 business-icons center">
                  <i className="material-icons small pink-text text-darken-2 ">
                    home
                  </i>
                </div>
                <div className="col s10 business-contact lighten-3">
                  <h6> {address} </h6>
                  <h5>
                    {" "}
                    {city}, {state}{" "}
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col s2 business-icons center">
                  <i className="material-icons small pink-text text-darken-2 ">
                    email
                  </i>
                </div>
                <div className="col s10 business-contact lighten-3">
                  <h5> {email} </h5>
                </div>
              </div>
              <div className="row ">
                <div className="col s2 business-icons center">
                  <i className="material-icons small pink-text text-darken-2">
                    {" "}
                    phone{" "}
                  </i>
                </div>
                <div className="col s10 business-contact lighten-3">
                  <h5> {phone} </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
);}

export default BusinessBody;

BusinessBody.propTypes = {
    business: PropTypes.shape({
      about: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
  };