import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import history from '../history';
import { setCategory } from '../actions/business';
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
    constructor(props) {
        super(props);

        this.findBusinessesIn = this.findBusinessesIn.bind(this);
    }

    /** 
    *@description search for businesses in given category
    *
    * @returns {func} funtion
    * 
    * @memberof Home Component;
    */
    findBusinessesIn(chosenCategory) {
        this.props.setCategory(chosenCategory)
            history.push('/businesses');
    }

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
                            <div className="col s10 offset-s1 m10 offset-m1 banner-image">
                                <div className="row">
                                    <Link to="/login">
                                        <h2 className="green-text text-darken-4">
                                            WEco
                                    <span className="yellow-text text-darken-4">n</span>
                                            nect
                                    </h2>
                                    </Link>
                                </div>
                                <img className="responsive-img" src={hero} alt='Professionals' />
                            </div>
                            <div className="col s10 offset-s1 m10 offset-m1  banner-text  blue-grey lighten-5 ">
                                <h4 className="green-text text-darken-4"> Make Your Business known and get Connected today!</h4>
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
                    <div className="containers ">
                        <div className="section row s12">
                            <h4 className="center category-header green-text text-darken-4"> Checkout our Categories of businesses</h4>
                            <div className="category-tag center col s6 m4">
                                <h6>
                                    <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('education')}>
                                        Education
                                  </Link>
                                </h6>
                            </div>
                            <div className="category-tag center col s6 m4">
                                <h6> <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('entertainment')}>
                                    Entertainment
                                  </Link>
                                </h6>
                            </div>
                            <div className="category-tag center col s6 m4">
                                <h6>
                                <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('technology')}>
                                    Technology
                                  </Link>
                                </h6>
                            </div>
                            <div className="category-tag center col col s6 m4">
                                <h6>
                                    <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('food')}>
                                        Food
                                  </Link>
                                </h6>
                            </div>
                            <div className="category-tag center col s6 m4">
                                <h6> <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('fashion')}>
                                    Fashion
                                  </Link>
                                </h6>
                            </div>
                            <div className="category-tag center col s6 m4">
                                <h6>
                                <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('sport')}>
                                    Sport
                                  </Link>
                                </h6>
                            </div>
                            <div className="category-tag center col s6 m4">
                                <h6>
                                    <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('commerce')}>
                                        Commerce
                                  </Link>
                                </h6>
                            </div>
                            <div className="category-tag center col s6 m4">
                                <h6> <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('agriculture')}>
                                    Agriculture
                                  </Link>
                                </h6>
                            </div>
                            <div className="category-tag center col s6 m4">
                                <h6>
                                <Link className= "black-text" to="#" onClick={() => this.findBusinessesIn('transportation')}>
                                    Transportation
                                  </Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setCategory }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);