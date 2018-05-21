import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import businessApi from '../service/businessApi';
import setToken from '../helpers/authorization';
import history from '../history';
import { updateBusiness } from '../actions/business';
import Footer from '../components/footer';
import BusinessUpdateForm from '../components/business_update_form';
import Navbar from './nav'
import customStyles from '../css/style.css';
import hero from '../assets/images/profession.jpg';

/**
 * @class BusinessUpdate
 * 
 * @extends {React.Component}
 */
class BusinessUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};
    }
    componentWillMount() {
        const businessId = this.props.match.params.businessId;
        businessApi.getThisBusiness(businessId)
            .then((response) => {
                const business = response.data.business;
                this.setState({
                    ...business
                })
            })
            .catch((error) => {
                 if (error.response.status === 404) {
                     dispatch(businessActions.notFound());
                 } 
            });
    };

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const state = this.state;
        this.setState({
            ...state,
            [name]: value
        })
    };

    handleSubmit(event) {
        event.preventDefault(event);
        const business = this.state;
        const businessId = this.props.match.params.businessId;
        this.props.updateBusiness(businessId, business);
    }
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessUpdateComponent
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
                            <h3> Update your Business and make it live </h3>
                        </div>
                    </div>
                    <div className="row head-font ">
                        <h4 className="center grey-text"> Business Update Form. </h4>
                        <div className="row">
                            <h5 className="center">Kindly update your business details as appropriate</h5>
                            <BusinessUpdateForm
                                businessObject = { this.state }
                                handleChange = { this.handleChange }
                                handleSubmit = { this.handleSubmit }
                                formErrors = { this.props.data.errors }
                                isFetching = { this.props.data.awaiting }
                            />
                        </div>
                    </div>
                </main>
                <Footer />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.businessReducer;
    console.log(data)
    return {
        data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateBusiness }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessUpdate);