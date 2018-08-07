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
   * @description renders the landing page
   * @method render
   *
   * @memberof Home component
   * @returns { jsx } landing page
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
                                    <Link to="/">
                                        <h2 className="pink-text text-darken-4">
                                            WEco
                                    <span className="green-text text-darken-4">nn</span>
                                            ect
                                    </h2>
                                    </Link>
                                </div>
                                <img className="responsive-img" src={hero} alt='Professionals' />
                            </div>
                            <div className="col s10 offset-s1 m10 offset-m1  banner-text  blue-grey lighten-5 ">
                                <h4 className="gr-text text-darken-4"> Make Your Business known and get Connected today!</h4>
                                <p>
                                    <span className="pink-text text-darken-4 hide-on-med-and-down">WEconnect brings clients and businesses together</span>
                                </p>
                                    <Link to="/signup" className="white-text">   
                                    <button className="btn btn-large pink darken-4 white-text">
                                      Start Here
                                      </button>
                                  </Link>
                            </div>
                        </div>
                    </div>
                    <div className="containers ">
                        <div className="section row s12">
                            <h4 className="center category-header green-text text-darken-4"> Checkout our Categories of businesses</h4>

                            <div className="category-tag center col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('education')}>
                                    <img className="responsive-img category-image" src={education} alt='Education' />
                                </Link>
                                <h5> Education </h5>
                            </div>
                            <div className="category-tag center col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('entertainment')}>
                                    <img className="responsive-img category-image" src={entertainment} alt='Entertainment' />
                                </Link>
                                <h5>  Entertainment </h5>
                            </div>
                            <div className="category-tag center col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('technology')}>
                                    <img className="responsive-img category-image" src={technology} alt='Technology' />
                                </Link>
                                <h5> Technology </h5>
                            </div>
                            <div className="category-tag center col col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('food')}>
                                    <img className="responsive-img category-image" src={food} alt='Food' />
                                </Link>
                                <h5> Food </h5>
                            </div>
                            <div className="category-tag center col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('fashion')}>
                                    <img className="responsive-img category-image" src={fashion} alt='fashion' />
                                </Link>
                                <h5> Fashion </h5>
                            </div>
                            <div className="category-tag center col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('sport')}>
                                    <img className="responsive-img category-image" src={sport} alt='sport' />
                                </Link>
                                <h5> Sport </h5>
                            </div>
                            <div className="category-tag center col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('commerce')}>
                                    <img className="responsive-img category-image" src={commerce} alt='Commerce' />
                                </Link>
                                <h5> Commerce </h5>
                            </div>
                            <div className="category-tag center col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('agric')}>
                                    <img className="responsive-img category-image" src={agriculture} alt='Agriculture' />
                                </Link>
                                <h5> Agriculture </h5>
                            </div>
                            <div className="category-tag center col s8 offset-s2 m4">
                                <Link className="black-text" to="#" onClick={() => this.findBusinessesIn('transportation')}>
                                    <img className="responsive-img category-image" src={transportation} alt='Transportation' />
                                </Link>
                                <h5> Transportation </h5>
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