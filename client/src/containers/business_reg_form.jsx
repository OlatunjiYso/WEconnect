import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initiateBusinessRegistration } from '../actions/business';
import Footer from '../components/footer';
import BusinessForm from '../components/business_form';
import Navbar from './nav';
import hero from '../assets/images/profession.jpg';
import dummyImg from '../assets/images/no_image_yet.png';

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
                name: '', category: '', slogan: '', address: '',
                city: '', state: '', phone: '', email: '', whatsapp: '', twitter: '',
                facebook: '', instagram: '', heading1: '', body1: '', heading2: '',
                body2: '',
            },
            image: {
                imageFile: {}, imageSrc: dummyImg
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

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
    //   checkImageFile(filereader, file, (fileType) => {
    //     if (fileType === 'image/png' || fileType === 'image/gif' ||
    //       fileType === 'image/jpeg') {
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
    //     } else {
    //       toastr.clear();
    //       toastr.error('please provide a valid image file');
    //     }
    //   });
    } else {
      this.setState({
        ...this.state,
        image: { ...this.state.image, imageSrc: dummyImg, imageFile: {}, },
    })
     }
  }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const state = this.state;
        this.setState({
            ...state,
            business: { ...this.state.business, [name]: value },
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        const image = this.state.image;
        const business = this.state.business;
        this.props.initiateBusinessRegistration(image, business);
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
                        <div className="row">
                            <h5 className="center">Build your business profile page</h5>
                            <BusinessForm
                                imageObject = {this.state.image}
                                businessObject= {this.state.business}
                                handleChange= {this.handleChange}
                                handleSubmit= {this.handleSubmit}
                                formErrors = {this.props.data.errors}
                                isFetching = {this.props.data.awaitingResponse}
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
    return bindActionCreators({ initiateBusinessRegistration }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessRegForm);