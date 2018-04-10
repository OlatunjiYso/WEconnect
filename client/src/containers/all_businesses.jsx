import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Navbar from '../components/navbar';
import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';

/**
 * @class AllBusinessComponent
 * 
 * @extends {React.Component}
 */
class AllBusinesses extends Component {
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof AllBusinessesComponent
    */
    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <div className="row black-text">
                        <div className="col s12 body-font center-align">
                            <h3>Get the Best of Professionals from Us </h3>
                            <h5>Define your search parameters to meet your specific needs</h5>
                        </div>
                        <div className="row center-align underlined bottom-pads">
                            <div className="col s5 offset-s1 m3 offset-m1 l2 offset-l1">
                                <select>
                                    <option value="" disabled selected>location</option>
                                    <option value="1">Lagos</option>
                                    <option value="2">Abuja</option>
                                    <option value="3">Rivers</option>
                                    <option value="3">Somewhere</option>
                                </select>
                                <label>Materialize Select</label>
                            </div>
                            <div className="col s5 m3 offset-m1 l2 offset-l1">
                                <select>
                                    <option value="" disabled selected>Category</option>
                                    <option value="1">Leather Work</option>
                                    <option value="2">Plumbing</option>
                                    <option value="3">Photography</option>
                                    <option value="3">Medicals</option>
                                </select>
                                <label>Category</label>
                            </div>
                            <div className="col s8 offset-s2 m4 l3 offset-l3 center">
                                <a className=" pink-text text-lighten-4 blue-grey darken-4 btn">
                                    <i className="left material-icons">search</i> Search </a>
                            </div>
                        </div>
                    </div>
                    <div className="row head-font">
                        <div className="col s12">
                            <h2 className="sofia center-align  pink-text">Our Collection Of Businesses and professionals for You! </h2>
                        </div>
                    </div>
                    <div className="row body-font cushion center">
                        <div className="left-gap">
                            <div className="col l2 m3 s6 business-card blue-grey darken-4">
                                <div className="row card-img ">
                                    <img className="responsive-img" src="./public/images/cameras.jpg" />
                                </div>
                                <div className="row card-title">
                                    Clicks
                                </div>
                                <div className="row">
                                    <div className="">
                                        <h6 className="card-location center">
                                            <i className="tiny material-icons">location_on</i>
                                            Anthony, Lagos</h6>
                                    </div>
                                    <div className="card-button centre">
                                        <button> View Profile</button>
                                    </div>
                                </div>
                            </div>
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