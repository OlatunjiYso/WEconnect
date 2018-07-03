import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

/**
 * @s FooterComponent
 * 
 * @extends {React.Component}
 */
class BusinessCard extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessCardComponent
    */
    render(match) {
        const business = this.props.business;
        return (
            <div>
                <div className="col s8 offset-s2 offset-m1 m4 l3 container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card small bottom-pad grey lighten-4 pink-margin-hover">
                                <div className="card-image">
                                    <img className="responsive-img" src={business.image} alt='bizPic' />
                                </div>
                                <div className="card-content">
                                    <Link to={`/businesses/${business.id}`}>
                                        <h6 className="center business-card-label"> {business.name}
                                        </h6>
                                    </Link>
                                    <div>
                                     <h6 className="center grey-text text-darken-1 small-font">
                                            <i className=" material-icons tiny pink-text">place</i>
                                            {business.city}, {business.state}.
                                    </h6>
                                    </div>
                                </div>
                                <button className="card-button cursor white">
                                    <Link to={`/businesses/${business.id}`} className="center grey-text text-darken-2">visit
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
BusinessCard.propTypes = {
    business: PropTypes.object.isRequired,
}

export default BusinessCard;