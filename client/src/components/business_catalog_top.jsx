import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavItem, Dropdown, Button } from 'react-materialize';

/**
 * @s FooterComponent
 * 
 * @extends {React.Component}
 */
class BusinessCatalogTop extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessCatalogTop Component
    */
    render() {
      const { category } = this.props.filter;
      const chosenState = this.props.filter.state;
      const location = (chosenState.length > 1) ? `in ${ chosenState }` : '';
        return (
            <div>
                <div className="row black-text">
                    <div className="col s12 body-font center-align grey-text text-darken-2">
                        <h4>Our Collection Of Businesses and Professionals for You</h4>
                    </div>
                    <div className="row center-align underlined bottom-pad">
                        <div className="col s5 offset-s1 m3 offset-m1 l2 offset-l1 cursor">
                            <Dropdown trigger={
                                <h6>
                                    <span className="card-button">
                                        <i className="tiny material-icons top-pad pink-text">place</i>
                                        <span className="green-text "> Filter By Location </span>
                                    </span>
                                </h6>
                            }>
                                <NavItem>one</NavItem>
                                <NavItem>two</NavItem>
                                <NavItem divider />
                                <NavItem>three</NavItem>
                            </Dropdown>
                        </div>
                        <div className="col s5 offset-s1 m3 offset-m1 l2 offset-l1 cursor">
                            <Dropdown trigger={
                                <h6>
                                    <span className="card-button">
                                        <i className="tiny material-icons top-pad pink-text">card_travel</i>
                                        <span className="green-text"> Filter By category </span>
                                    </span>
                                </h6>
                            }>
                                <NavItem>one</NavItem>
                                <NavItem>two</NavItem>
                                <NavItem divider />
                                <NavItem>three</NavItem>
                            </Dropdown>
                        </div>
                        <div className="col s8 offset-s2 m4 l2 offset-l1 right-align push-down">
                            <Link className=" green-text text-darken-4 btn grey lighten-4" to="#!">
                                Get businesses
                     </Link>
                        </div>
                    </div>
                </div>
                <div className="row head-font">
                    <div className="col s12">
                        <h5 className="center-align pink-text">
                           {category} Businesses {location} 
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

BusinessCatalogTop.propTypes = {
    filter: PropTypes.object.isRequired
}

export default BusinessCatalogTop;