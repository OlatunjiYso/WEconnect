import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { initiateBusinessRegistration } from "../actions/business";
import Footer from "../components/footer";
import BusinessForm from "../components/businessForm";
import Navbar from "./nav";
import hero from "../assets/images/profession.jpg";
import dummyImg from "../assets/images/no_image_yet.png";
import { Input, Modal } from "react-materialize";

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
        name: "",
        category: "",
        address: "",
        about: "",
        city: "",
        state: "",
        phone: "",
        email: ""
      },
      image: {
        imageFile: {},
        imageSrc: dummyImg
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  /**
   * @description handles changes in image input
   * @method handleImageChange
   *
   * @param { object } event - event object containing image details
   *
   * @memberof BusinessRegForm component
   * @returns { object } business image - new updated business image state
   */
  handleImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const filereader = new FileReader();
      this.setState({
        ...this.state,
        image: { ...this.state.image, imageFile: file }
      });
      filereader.onload = e => {
        this.setState({
          ...this.state,
          image: { ...this.state.image, imageSrc: e.target.result }
        });
      };
      filereader.readAsDataURL(file);
      2;
    } else {
      this.setState({
        ...this.state,
        image: { ...this.state.image, imageSrc: dummyImg, imageFile: {} }
      });
    }
  }

  /**
   * @description handles changes in form input.
   * @method handleChange
   *
   * @param { object } event - event object
   *
   * @memberof BusinessRegForm component
   * @returns { func } funtion that updates state
   */
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const state = this.state;
    this.setState({
      ...state,
      business: { ...this.state.business, [name]: value }
    });
  }
 
   /**
   * @description handles final form submission
   * @method handleSubmit
   *
   * @param { object } event - event object
   *
   * @memberof BusinessRegForm component
   * @returns { func } funtion that persists business information
   */
  handleSubmit(event) {
    event.preventDefault();
    const image = this.state.image;
    const business = this.state.business;
    this.props.initiateBusinessRegistration(image, business);
  }

  /**
   * @description renders a page for business registration
   * @method render
   *
   * @memberof BusinessRegForm component
   * @returns { jsx } business registration page
   */
  render() {
      const { awaitingResponse, errors } = this.props.businessData;
    return (
      <div>
        <Navbar />
        <main>
          <div className="row dashboard head-font ">
            <div className="col s8 offset-s2 m3 l2 logo center-align">
              <img className="responsive-img left" src={hero} />
            </div>
            <div className="col s12 m9 l8  green-text text-darken-2 center-align">
              <h3>Register your Business and get Connected </h3>
            </div>
          </div>
          <div className="row head-font">
            <div className="row">
              <h5 className="center pink-text text-darken-4">
                Build your business profile page
              </h5>
              <BusinessForm
                image={this.state.image}
                business={this.state.business}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                formErrors={errors}
                isFetching={awaitingResponse}
                handleImageChange={this.handleImageChange}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const businessData = state.businessReducer;
  return {
    businessData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ initiateBusinessRegistration }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessRegForm);
