import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import businessApi from '../service/businessApi';
import { initiateBusinessUpdate } from '../actions/business';
import Footer from '../components/footer';
import BusinessUpdateForm from '../components/business_update_form';
import Navbar from './nav'
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
        this.handleImageChange = this.handleImageChange.bind(this);
        this.state = { business: {}, image: {}, };
    }
    componentWillMount() {
        const businessId = this.props.match.params.businessId;
        businessApi.getThisBusiness(businessId)
            .then((response) => {
                const business = response.data.business;
                this.setState({
                    business: { ...business },
                    image: { imageFile: {}, imageSrc: business.image }
                })
            })
            .catch((error) => {
                 if (error.response.status === 404) {
                     dispatch(businessActions.notFound());
                 } 
            });
    };

/**
   * @description handles changes in file input
   * @method handleImageChange
   *
   * @param { object } event - event object containing image details
   *
   * @returns { object } business image - new updated business image state
   */
  handleImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filereader = new FileReader();
         this.setState({
            ...this.state,
            image: { ...this.state.image, imageFile: file },
        })
          filereader.onload = (e) => {
            this.setState({
                ...this.state,
                image: { ...this.state.image, imageSrc: e.target.result },
            })
          };
          filereader.readAsDataURL(file);
    } else {
      this.setState({
        ...this.state,
        image: { ...this.state.image, imageFile: {}, },
    })
     }
  }
 
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const state = this.state;
        this.setState({
            ...state,
            business: { ...state.business, [name]: value}
        })
    };

    handleSubmit(event) {
        event.preventDefault(event);
        const business = this.state.business;
        const image = this.state.image;
       // const businessId = this.props.match.params.businessId;
        this.props.initiateBusinessUpdate(image, business);
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
                                imageObject = {this.state.image}
                                businessObject = { this.state.business }
                                handleChange = { this.handleChange }
                                handleSubmit = { this.handleSubmit }
                                formErrors = { this.props.data.errors }
                                isFetching = { this.props.data.awaitingResponse }
                                handleImageChange = {this.handleImageChange}
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
    return {
        data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ initiateBusinessUpdate }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessUpdate);