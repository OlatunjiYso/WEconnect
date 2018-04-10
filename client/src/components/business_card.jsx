import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

/**
 * @s FooterComponent
 * 
 * @extends {React.Component}
 */
class UserBusiness extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof UserBusinessComponent
    */
    render() {
        const userBusiness = this.props.userBusiness;
        return (
            <div>
                <div className="col s8 offset-s2 offset-m1 m4 l3 business-card blue-grey darken-4 container">
                    <div className="row card-img ">
                        <img className="responsive-img" src={this.props.businesssPic} alt='bizPic' />
                    </div>
                    <div className="row card-title center">
                        <Link className="pink-text text-lighten-4" to="#!">{userBusiness.name} </Link>
                    </div>
                    <div className="row">
                        <div className="center-align">
                            <Link to="manage_business.html" className="btn green lighten-2" type="button"> Manage</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
UserBusiness.propTypes = {
    userBusiness: PropTypes.object.isRequired
}

export default UserBusiness;