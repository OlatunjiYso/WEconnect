import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Navbar from '../components/navbar';

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
                
                <main>
                    <div className="center banner">
                        <div className="row hide-on-med-and-up">
                            <div className="col s8 offset-s2 banner-image">
                                <div className="row">
                                    <h1> WEconnect!</h1>
                                </div>
                                <img className="responsive-img" src={hero} alt='Professionals'/>
                            </div>
                            <div className="col s8 offset-s2 m4  offset-m1  banner-text blue-grey darken-4">
                                <h2 className="pink-text text-lighten-4"> Make Your Business known and get Connected today!</h2>
                                <p>
                                    <span className="pink-text text-lighten-4">WEconnect brings clients and businesses together!</span>
                                </p>
                                <button className="btn btn-large pink white-text "> Sign Up</button>
                            </div>
                        </div>
                        <div className="row hide-on-small-only">  
                            <div className="col m4 offset-m1 banner-text blue-grey darken-4">
                                <h2 className="pink-text text-lighten-4"> Make Your Business known and get Connected today!</h2>
                                <p>
                                    <span className="pink-text text-lighten-4">WEconnect brings clients and businesses together!</span>
                                </p>
                                <button className="btn btn-large pink white-text "> Sign Up</button>
                            </div>
                            <div className="col m6 offset-l1 banner-image">
                                <div className="row">
                                    <h1> WEconnect!</h1>
                                </div>
                                <img className="responsive-img" src={hero} alt='Professionals'/>
                            </div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="section row s12">
                            <h4 className="center category-header"> Checkout our Categories of businesses</h4>
                            <div className="category-tag col s4 l2">
                                <h6> Commerce</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Fashion</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Music</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Catering</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Entertainment</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Technology</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Photography</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Graphics</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Engineering</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Commerce</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Fashion</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Music</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Catering</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Entertainment</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Technology</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Photography</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Graphics</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Engineering</h6>

                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Fashion</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Music</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Catering</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Entertainment</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Technology</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Photography</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Graphics</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Engineering</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Commerce</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Fashion</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Music</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Catering</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Entertainment</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Technology</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Photography</h6>
                            </div>
                            <div className="category-tag col s4 l2">
                                <h6> Graphics</h6>
                            </div>
                            <div className="category-tag col s4 l2">
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