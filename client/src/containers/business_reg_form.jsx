import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { NavItem, Dropdown, Button } from 'react-materialize';
import Footer from '../components/footer';
import BusinessForm from '../components/business_form';
import Navbar from '../components/navbar'
import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';
import businesses from '../dummy/all_businesses';
import formSchema from '../formState/business_reg_state';

/**
 * @class BusinessRegForm
 * 
 * @extends {React.Component}
 */
class BusinessRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: {
                businessName: '', category: '', slogan: '', address: '',
                location: '', phone: '', email: '', whatsapp: '', twitter: '',
                facebook: '', instagram: '', heading1: '', body1: '', heading2: '',
                body2: '', heading3: '', body3: ''
            },
            submitted: false

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const state = this.state;
        this.setState({
            ...state,
            business: { ...this.state.business, [name]: value },
            submitted: true
        })
    };

    handleSubmit(event) {
        alert('An entry has been received: ' + this.state.business.location);
        event.preventDefault();
    }
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessRegFormComponent
    */
    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <div className="row dashboard head-font ">
                        <div className="col s8 offset-s2 m3 l2 logo center-align">
                            <img className="responsive-img left" src={hero} />
                        </div>
                        <div className="col s12 m9 l8  green-text center-align">
                            <h3>Register your Business and get Connected </h3>
                        </div>
                    </div>
                    <div className="row head-font ">
                        <h4 className="center grey-text"> Business Registration Form. </h4>
                        <div className="row">
                            <h5 className="center">Kindly fill in your business details as appropriate</h5>
                            <BusinessForm
                                businessObject= { this.state.business }
                                handleChange= { this.handleChange }
                                handleSubmit= { this.handleSubmit }
                            />
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

export default BusinessRegForm;