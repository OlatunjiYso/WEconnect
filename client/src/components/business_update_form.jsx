import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "react-materialize";

import loader from '../assets/images/loader.gif';

/**
 * @description BusinessUpdateFormComponent
 *
 * @extends {React.Component}
 */
class BusinessUpdateForm extends Component {
  /**
   *
   *
   * @returns {JSX} JSX
   *
   * @memberof BusinessUpdateFormComponent
   */
  render() {
    // Bring in methods as props from regForm container
    const handleChange = this.props.handleChange;
    const handleSubmit = this.props.handleSubmit;

    // Bring in data as props from regForm container
    const business = this.props.businessObject;
    const formErrors = this.props.formErrors;
    const image = this.props.imageObject;

    // Display validation errors if present
    const validationErrors = formErrors.validationErrors ? (
      <div className=" col s8 offset-s2 m6 offset-m3 left-align error-box bottom-gap">
        {formErrors.validationErrors.map((eachError, index) => {
          return (
            <h6 key={index}>
              <i className="material-icons red-text tiny">clear</i>
              {eachError}
            </h6>
          );
        })}
      </div>
    ) : null;

    // Display Conflict errors if present
    const conflictErrors = formErrors.conflict ? (
      <div className="col s8 offset-s2 m6 offset-m3 center-align error-box bottom-gap">
        <h6>
          <i className="material-icons red-text tiny">clear</i>{" "}
          {formErrors.conflict}
        </h6>
      </div>
    ) : null;

    // Display Forbidden case errors if present
    const forbiddenErrors = formErrors.forbidden ? (
      <div className="col s8 offset-s2 m6 offset-m3 center-align error-box bottom-gap">
        <h6>
          <i className="material-icons red-text tiny">clear</i>{" "}
          {formErrors.forbidden}
        </h6>
      </div>
    ) : null;

    // Display asyncronous call progress feedback
    const spinner = this.props.isFetching ? (
        <img
          className="responsive-img left-gap"
          src={loader}
          style={{ height: "40px", width: "40px" }}
        /> 
      ) : null;
    return (
      <div>
        <div>
          {validationErrors} {conflictErrors} {forbiddenErrors}
        </div>
        <form
          className="col s10 offset-s1 m8 offset-m2 business-form"
          onSubmit={handleSubmit}
        >
          <div className="row top-pad">
            <h6 className="left-gap bold-font grey-text text-darken-2">
              {" "}
              Business Name <span className="red-text">*</span>
            </h6>
            <div className="input-field  all-borders left-gap right-gap">
              <input
                type="text"
                value={business.name}
                onChange={handleChange}
                name="name"
                className="validate"
              />
            </div>
          </div>
          <div className="row">
            <h6 className="left-gap bold-font">
              {" "}
              Business state <span className="red-text">*</span>
            </h6>
            <div className=" input-field mid-left-gap right-gap">
              <Input
                s={12}
                type="select"
                value={business.state}
                onChange={handleChange}
                name="state"
                className="all-borders"
              >
                <option value=" lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value=" ogun">Ogun</option>
              </Input>
            </div>
          </div>
          <div className="row">
            <h6 className="left-gap bold-font">
              {" "}
              Business category <span className="red-text">*</span>
            </h6>
            <div className=" input-field mid-left-gap right-gap ">
              <Input
                s={12}
                type="select"
                value={business.category}
                onChange={handleChange}
                name="category"
                className="all-borders"
              >
                <option value="fashion">Fashion</option>
                <option value="technology">Technology</option>
                <option value="housing">Housing</option>
              </Input>
            </div>
          </div>
          <div className="row">
            <h6 className="left-gap bold-font">
              {" "}
              Business Address <span className="red-text">*</span>
            </h6>
            <div className="input-field all-borders left-gap right-gap">
              <textarea
                value={business.address}
                onChange={handleChange}
                name="address"
                className="materialize-textarea"
                length="140"
              />
            </div>
          </div>
          <div className="row">
            <h6 className="left-gap bold-font">
              {" "}
              Business Email<span className="red-text">*</span>{" "}
            </h6>
            <div className="input-field all-borders left-gap right-gap">
              <input
                type="text"
                value={business.email}
                onChange={handleChange}
                name="email"
                className="validate"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4 offset-m1">
              <h6 className="bold-font">
                {" "}
                Business Phone <span className="red-text">*</span>{" "}
              </h6>
              <div className="input-field all-borders">
                <input
                  type="text"
                  value={business.phone}
                  onChange={handleChange}
                  name="phone"
                  className="validate"
                />
              </div>
            </div>
            <div className="col s12 m4 offset-m1">
              <h6 className="bold-font">
                {" "}
                Business City <span className="red-text">*</span>{" "}
              </h6>
              <div className="input-field all-borders">
                <input
                  type="text"
                  value={business.city}
                  onChange={handleChange}
                  name="city"
                  className="validate"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <h6 className="left-gap bold-font">
              {" "}
              Tell us about your business{" "}
              <span className="red-text">*</span>{" "}
            </h6>
            <div className="all-borders left-gap right-gap ">
              <textarea
                value={business.about}
                onChange={handleChange}
                name="about"
                className="materialize-textarea large-input"
                length="1000"
              />
            </div>
          </div>
          <div className="row">
            <h6 className="left-gap bold-font">
              {" "}
              Uplaod your business picture{" "}
              <span className="optionals"> ( Optional ) </span>
            </h6>
            <div className="left-gap right-gap">
              <div>
                <img
                  className="responsive-img"
                  style={{ height: "200px", width: "320px" }}
                  src={image.imageSrc}
                />
              </div>
              <input type="file" onChange={this.props.handleImageChange} />
            </div>
          </div>
          <div className="row center-align">
          <div className="col s12">
                  <input
                    type="submit"
              value="Update Business"
              className="form-btn btn"
            />
            {spinner}
            </div>

            {/* <div className="">{spinner}</div> */}
          </div>
        </form>
      </div>
    );
  }
}

BusinessUpdateForm.propTypes = {
  businessObject: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  formErrors: PropTypes.object.isRequired
};
export default BusinessUpdateForm;
