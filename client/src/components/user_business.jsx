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
                <div className="col s8 offset-s2 offset-m1 m4 l3 container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card small bottom-pad grey lighten-4">
                                <div className="card-image">
                                    <img className="responsive-img" src={this.props.businesssPic} alt='bizPic' />
                                </div>
                                <div className="card-content">
                                <Link to = { `/businesses/${userBusiness.id}` }>
                                    <h6 className="center green-text text-darken-4"> {userBusiness.name} </h6>
                                </Link>
                                </div>
                                <Link to = { `/manageBusiness/${userBusiness.id}` }> 
                                    <h6 className="card-button cursor white">
                                         <div className="center grey-text text-darken-2">Manage</div>
                                    </h6>
                                </Link>
                            </div>
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