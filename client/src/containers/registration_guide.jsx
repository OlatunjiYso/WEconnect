import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Navbar from './nav';
import customStyles from '../css/style.css';

/**
 * @class RegistrationGuide
 * 
 * @extends {React.Component}
 */
class RegistrationGuide extends Component {
    constructor(props) {
        super(props);
    }

    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof RegistrationGuideComponent
    */
    render() {

        return (
            <div>
                <Navbar />
                <main>
                    <div className="row">
                        <div className="top-pad col s12 m8 offset-m2">
                            <h4 className="left-align green-text text-darken-2">
                                Few things to note
                            </h4>
                            <h5 className="top-pad grey-text text-darken-1">
                                Our business registration form is in 2 major sections, which are as follows
                            </h5>
                            <ul className="instruction no-top-gap">
                                <li>
                                    <h6> Section 1: ( Core Business details)</h6>
                                </li>
                                <li>
                                    <h6>Section 2: ( Business content) </h6>
                                </li>
                            </ul>
                            <h5 className="top-gap green-text text-darken-3"> Section 1 of form</h5>
                            <h6 className="instruction no-top-gap">
                                Here, you will be required to provide your core business information which includes the name, email, address, slogan, city, just to mention a few.
                           </h6>
                            <h5 className="top-gap green-text text-darken-3"> Section 2 of form</h5>
                            <h6 className="instruction no-top-gap">
                                Here, you can customize your business layout as you would be given the opportunity to freely choose a suitable heading or topic for each section of your business page.
                            </h6>
                            <h5 className="top-gap green-text text-darken-3"> Illustration</h5>
                            <h6 className="instruction no-top-gap">
                                You may choose to supply
                                 <span className="green-text text-lighten-1">
                                  <em> what we do </em>
                                  </span> as a header, and in the input box provided under the header, you can write extensively about 
                                <span className="green-text text-lighten-1">
                                 <em> what you do </em>
                                 </span>
                            </h6>
                            <h5 className="top-gap green-text text-darken-3">Can the headers be changed?</h5>
                            <h6 className="instruction no-top-gap">
                                Oh yes! You can edit the headers and sections as much as you would
                            </h6>
                            <Link to = "/businessRegistration">
                                    <h5 className="center amber-text text-darken-4 top-pad-much"> Proceed to Registration Form </h5>
                            </Link>
                        </div>

                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}


export default RegistrationGuide;