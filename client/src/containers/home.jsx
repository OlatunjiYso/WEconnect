import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import history from '../history';
import { setCategory } from '../actions/business';
import Footer from '../components/footer';
import Nav from './nav';
import hero from '../assets/images/profession.jpg';
import education from '../assets/images/education.jpg';
import entertainment from '../assets/images/entertainment.jpg';
import technology from '../assets/images/technology.jpg';
import food from '../assets/images/food.jpg';
import fashion from '../assets/images/fashion.jpg';
import sport from '../assets/images/sport.jpg';
import commerce from '../assets/images/commerce.jpg';
import transportation from '../assets/images/transportation.jpg';
import agriculture from '../assets/images/agriculture.jpg';


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
                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('education')}>
                                <div className="category-tag center col s8 offset-s2 m4">
                                    <img className="responsive-img category-image" src={education} alt='Education' />
                                    <h5> Education </h5>
                                </div>
                            </Link>

                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('entertainment')}>
                                <div className="category-tag center col s8 offset-s2 m4">
                                    <img className="responsive-img category-image" src={entertainment} alt='Entertainment' />
                                    <h5>  Entertainment </h5>
                                </div>
                            </Link>

                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('technology')}>
                                <div className="category-tag center col s8 offset-s2 m4">
                                <img className="responsive-img category-image" src={technology} alt='Technology'/>
                                    <h5> Technology </h5>
                                </div>
                            </Link>

                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('food')}>
                                <div className="category-tag center col col s8 offset-s2 m4">
                                <img className="responsive-img category-image" src={food} alt='Food' />
                                    <h5> Food </h5>
                                </div>
                            </Link>

                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('fashion')}>
                                <div className="category-tag center col s8 offset-s2 m4">
                                <img className="responsive-img category-image" src={fashion} alt='fashion' />
                                    <h5> Fashion </h5>
                                </div>
                            </Link>

                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('sport')}>
                                <div className="category-tag center col s8 offset-s2 m4">
                                <img className="responsive-img category-image" src={sport} alt='sport' />
                                    <h5> Sport </h5>
                                </div>
                            </Link>

                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('commerce')}>
                                <div className="category-tag center col s8 offset-s2 m4">
                                <img className="responsive-img category-image" src={commerce} alt='Commerce' />
                                    <h5> Commerce </h5>
                                </div>
                            </Link>

                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('agriculture')}>
                                <div className="category-tag center col s8 offset-s2 m4">
                                <img className="responsive-img category-image" src={agriculture} alt='Agriculture' />
                                    <h5> Agriculture </h5>
                                </div>
                            </Link>

                            <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('transportation')}>
                                <div className="category-tag center col s8 offset-s2 m4">
                                <img className="responsive-img category-image" src={transportation} alt='Transportation' />
                                    <h5> Transportation </h5>
                                </div>
                            </Link>
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