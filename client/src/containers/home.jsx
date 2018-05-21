import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Nav from './nav';

import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';

/**
 * @class HomeComponent
 * 
 * @extends {React.Component}
 */
class Home extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof FooterComponent
    */
    render() {
        return (
            <div>
                <Nav />
                <main>
                    <div className="center banner">
                        <div className="row">
                            <div className="col s12 m10 offset-m1 banner-image">
                                <div className="row">
                                    <Link to="/login">
                                        <h1 className="green-text text-darken-4">
                                            WEco
                                    <span className="yellow-text text-darken-4">n</span>
                                            nect
                                    </h1>
                                    </Link>
                                </div>
                                <img className="responsive-img" src={hero} alt='Professionals' />
                            </div>
                            <div className="col s12 m10 offset-m1  banner-text  blue-grey lighten-5 ">
                                <h3 className="green-text text-darken-4"> Make Your Business known and get Connected today!</h3>
                                <p>
                                    <span className="green-text text-darken-4 hide-on-med-and-down">WEconnect brings clients and businesses together</span>
                                </p>
                                <button className="btn btn-large yellow darken-4 white-text">
                                  <Link to="/signup" className="white-text">
                                        Start Here
                                  </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="section row s12">
                            <h4 className="center category-header green-text text-darken-4"> Checkout our Categories of businesses</h4>
                            <div className="category-tag center col s4 l3">
                                <h6> Commerce</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Fashion</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Music</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Catering</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Entertainment</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Technology</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Photography</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Graphics</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Engineering</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Commerce</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Fashion</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Music</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Catering</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Entertainment</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Technology</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Photography</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Graphics</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Engineering</h6>

                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Fashion</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Music</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Catering</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Entertainment</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Technology</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Photography</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Graphics</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Engineering</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Commerce</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Fashion</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Music</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Catering</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Entertainment</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Technology</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Photography</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Graphics</h6>
                            </div>
                            <div className="category-tag center col s4 l3">
                                <h6> Engineering</h6>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

export default Home;