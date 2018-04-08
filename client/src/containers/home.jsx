import React, { Component } from 'react';

import Footer from '../components/footer';
import Navbar from '../components/navbar';


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
                <Navbar />
                <h1> Home Page Information </h1>
                <Footer />
            </div>
        )
    }
}

export default Home;