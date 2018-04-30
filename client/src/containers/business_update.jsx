import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import history from '../history';
import businessActions from '../actions/business';
import Footer from '../components/footer';
import BusinessUpdateForm from '../components/business_update_form';
import Navbar from '../components/navbar'
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
        const { dispatch, match } = this.props;
        axios.get(`https://weconnect-main.herokuapp.com/api/v1/businesses/${match.params.businessId}`)
            .then((response) => {
                const business = response.data.business;
                this.setState({
                    ...business
                })
                console.log('at manuall fetching')
                console.log(business);
                console.log(this.state);
            })
            .catch((error) => {
                /* if (error.response.status === 404) {
                     dispatch(businessActions.notFound());
                 } */
                console.log(error)
            });


    };

    componentDidMount() {

    }

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
        const business = this.state;
        const { dispatch, match } = this.props;
        event.preventDefault(event);
        dispatch(businessActions.attempt());
        axios.put(`https://weconnect-main.herokuapp.com/api/v1/businesses/${match.params.businessId}`, (business))
            .then((response) => {
                dispatch(businessActions.success());
                // redirect to business page
                history.push(`/businesses/${match.params.businessId}`);
            })
            .catch((error) => {
                console.log(error);
                dispatch(businessActions.updateFailed(error.response.data.message));
                if (error && error.response.status === 400) {
                    dispatch(authAction.BadRequest(error.response.data.errors))
                }
                if (error && error.response.status === 409) {
                    dispatch(businessActions.conflict(error.response.data.message))
                }
                if (error && error.response.status === 403) {
                    dispatch(businessActions.forbiddenRequest(error.response.data.message))
                }
            });

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

export default connect(mapStateToProps)(BusinessUpdate);