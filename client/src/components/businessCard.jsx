import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @description renders a single business information in a small card
 * @function BusinessCard
 *
 * @param { object } business - business object to be rendered
 *
 * @returns { jsx } jsx - displays a compact business card
 */
const BusinessCard = ({ business }) => {
  const { image, name, city, state, id } = business;
  return (
    <div>
      <div className="col s8 offset-s2 offset-m1 m4 l3 container">
        <div className="row">
          <div className="col s12">
            <div className="card small bottom-pad grey lighten-4 pink-margin-hover">
              <div className="card-image">
                <img
                  className="responsive-img"
                  src={image}
                  alt="business picture"
                />
              </div>
              <div className="card-content">
                <Link to={`/businesses/${business.id}`}>
                  <h6 className="center business-card-label"> {name}</h6>
                </Link>
                <div>
                  <h6 className="center grey-text text-darken-1 small-font">
                    <i className=" material-icons tiny pink-text">place</i>
                    {city}, {state}.
                  </h6>
                </div>
              </div>
              <button className="card-button cursor white">
                <Link
                  to={`/businesses/${id}`}
                  className="center grey-text text-darken-2"
                >
                  visit
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

BusinessCard.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired
};
