import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * @description renders a user's own business in a card
 * @function UserBusiness
 *
 * @param { object } props - data passed from parent component
 *
 * @returns { jsx } jsx - business card component
 */
const UserBusiness = props => {
  const { userBusiness } = props;
  const { image, name, id } = userBusiness;
  return (
    <div>
      <div className="col s8 offset-s2 offset-m1 m4 l3 container">
        <div className="row">
          <div className="col s12">
            <div className="card small bottom-pad grey lighten-4 pink-margin-hover" id="myBusiness">
              <div className="card-image">
                <img className="responsive-img" src={image} alt="bizPic" />
              </div>
              <div className="card-content">
                <Link to={`/businesses/${id}`}>
                  <h6 className="center card-name"> {name} </h6>
                </Link>
              </div>
              <Link to={`/manageBusiness/${id}`}>
                <h6 className="card-button cursor white manageBusiness">
                  <div className="center">Manage</div>
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserBusiness.propTypes = {
    userBusiness: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  };

export default UserBusiness;
