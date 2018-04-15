import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { NavItem, Dropdown, Button } from 'react-materialize';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import BusinessCard from '../components/business_card';
import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';
import profilePicture from '../assets/images/cameras.jpg';
import businesses from '../dummy/all_businesses';

/**
 * @class AllBusinessComponent
 * 
 * @extends {React.Component}
 */
class AllBusinesses extends Component {
    constructor(props) {
        super(props);
        this.state = {businesses};
      }
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof AllBusinessesComponent
    */
    render() {
        const FoundBusinesses = this.state.businesses.map((eachBusiness, index) => {
            return(
                <BusinessCard key={index} business= {eachBusiness} businesssPic= {profilePicture}/>
            ) 
        })
        return (
            <div>
                <Navbar />
                <main>
                    <div className="row black-text">
                        <div className="col s12 body-font center-align grey-text text-darken-2">
                            <h4>Our Collection Of Businesses and Professionals for You</h4>
                        </div>
                        <div className="row center-align underlined bottom-pad">
                            <div className="col s5 offset-s1 m3 offset-m1 l2 offset-l1 cursor">
                                <Dropdown trigger={
                                    <h6> 
                                    <span className= "card-button">
                                    <i className="tiny material-icons top-pad pink-text">place</i>
                                    <span className= "green-text "> Filter By Location </span>
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
                                        <span className= "card-button">
                                        <i className="tiny material-icons top-pad pink-text">card_travel</i>
                                        <span className= "green-text"> Filter By category </span>
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
                            Fashion Businesses in Lagos
                            </h5>
                        </div>
                    </div>
                    <div className="row cushion center">
                        <div className="">
                        { FoundBusinesses } 
                        </div>
                    </div>
                    <div className="row">
                        <ul className="pagination center-align ">
                            <li className="disabled ">
                                <Link to="#!">
                                    <i className="material-icons ">chevron_left</i>
                                </Link>
                            </li>
                            <li className="active blue-grey darken-4">
                                <Link className="pink-text text-ligthen-3" to="#!">1</Link>
                            </li>
                            <li className="waves-effect ">
                                <Link to="#!">2</Link>
                            </li>
                            <li className="waves-effect">
                                <Link to="#!">3</Link>
                            </li>
                            <li className="waves-effect ">
                                <Link to="#!">4</Link>
                            </li>
                            <li className="waves-effect">
                                <Link to="#!">5</Link>
                            </li>
                            <li className="waves-effect">
                                <Link to="#!">
                                    <i className="material-icons">chevron_right</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

export default AllBusinesses;