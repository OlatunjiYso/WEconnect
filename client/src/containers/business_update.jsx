import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import businessApi from "../service/businessApi";
import { initiateBusinessUpdate } from "../actions/business";
import Footer from "../components/footer";
import BusinessUpdateForm from "../components/businessUpdateForm";
import Navbar from "./nav";
import hero from "../assets/images/profession.jpg";

/**
 * @class BusinessUpdate
 *
 * @extends {React.Component}
 */
export class BusinessUpdate extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.state = { business: {}, image: {} };
  }
  componentWillMount() {
    const businessId = this.props.match.params.businessId;
    businessApi
      .getThisBusiness(businessId)
      .then(response => {
        const business = response.data.business;
        this.setState({
          business: { ...business },
          image: { imageFile: {}, imageSrc: business.image }
        });
      })
      .catch(error => {
        if (error.response.status === 404) {
          dispatch(businessActions.notFound());
        }
      });
  }

  /**
   * @description handles changes in image input
   * @method handleImageChange
   *
   * @param { object } event - event object containing image details
   *
   * @memberof BusinessUpdate component
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
    } else {
      this.setState({
        ...this.state,
        image: { ...this.state.image, imageFile: {} }
      });
    }
  }

  /**
   * @description handles changes in business form
   * @method handleChange
   *
   * @param { object } event - event object
   *
   * @memberof BusinessUpdate component
   * @returns { func }  updated field
   */
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const state = this.state;
    this.setState({
      ...state,
      business: { ...state.business, [name]: value }
    });
  }

  /**
   * @description handles final form submission
   * @method handleSubmit
   *
   * @param { object } event - event object
   *
   * @memberof BusinessUpdate component
   * @returns { func }  updated business information
   */
  handleSubmit(event) {
    event.preventDefault(event);
    const business = this.state.business;
    const image = this.state.image;
    this.props.initiateBusinessUpdate(image, business);
  }

  /**
   * @description renders entire page for business update
   * @method render
   *
   * @memberof BusinessUpdate component
   * @returns { jsx } business update page
   */
  render() {
    const { errors, awaitingResponse } = this.props.businessData;
    const { image, business } = this.state;
    return (
      <div>
        <Navbar />
        <main>
          <div className="row dashboard head-font ">
            <div className="col s8 offset-s2 m3 l2 logo center-align">
              <img className="responsive-img left" src={hero} />
            </div>
            <div className="col s12 m9 l8  green-text center-align">
              <h3 className="hide-on-small-only"> Update your Business and make it live </h3>
              <h4 className="hide-on-med-and-up"> Update your Business and make it live </h4>
            </div>
          </div>
          <div className="row head-font ">
            <h4 className="hide-on-small-only center grey-text"> Business Update Form. </h4>
            <div className="row">
              <BusinessUpdateForm
                image={image}
                business={business}
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
  return bindActionCreators({ initiateBusinessUpdate }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessUpdate);
