import React from "react";
import { Input } from "react-materialize";
import PropTypes from "prop-types";

import loader from "../assets/images/loader.gif";

/**
 * @description renders a stateless business registration form
 * @function BusinessForm
 *
 * @param { object } props - information passed from parent component
 *
 * @returns { jsx } jsx - a form to hold business information
 */
const BusinessForm = props => {
  const {
    handleChange,
    handleSubmit,
    formErrors,
    business,
    image,
    handleImageChange
  } = props;
  // Display validation errors if present
  const validationErrors =
    formErrors.status === 400 ? (
      <div className=" col s8 offset-s2 m6 offset-m3 left-align error-box bottom-gap">
        {formErrors.data.errors.map((eachError, index) => {
          return (
            <h6 key={index} id="validationErrors">
              <i className="material-icons red-text tiny">clear</i>
              {eachError}
            </h6>
          );
        })}
      </div>
    ) : null;

  // Display Conflict errors if present
  const conflictErrors =
    formErrors.status === 409 ? (
      <div className="col s8 offset-s2 m6 offset-m3 center-align error-box bottom-gap">
        <h6 id="conflictErrors">
          <i className="material-icons red-text tiny">clear</i>{" "}
          {formErrors.data.message}
        </h6>
      </div>
    ) : null;

  // Display asyncronous call progress feedback
  const spinner = props.isFetching ? (
    <img
      id="spinner"
      className="responsive-img left-gap"
      src={loader}
      style={{ height: "40px", width: "40px" }}
    />
  ) : null;

  return (
    <div>
      <div>
        {validationErrors} {conflictErrors}
      </div>
      <form
        className="col s10 offset-s1 m8 offset-m2 business-form"
        onSubmit={handleSubmit}
      >
        <div className="row top-pad no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className="">
              {" "}
              Business Name <span className="red-text">*</span>
            </h6>
            <div className="input-field  all-borders">
              <input
                id="name"
                type="text"
                value={business.name}
                onChange={handleChange}
                name="name"
                className="validate"
                required
                minLength="2"
                maxLength="50"
              />
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className=" no-bottom-gap">
              {" "}
              Business state <span className="red-text">*</span>
            </h6>
            <div className=" input-field no-top-gap">
              <Input
                id="state"
                s={12}
                type="select"
                value={business.state}
                onChange={handleChange}
                name="state"
                className="all-borders"
              >
                <option value="1">select</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="ogun">Ogun</option>
                <option value="ondo">Ondo</option>
                <option value="oyo">Oyo</option>
              </Input>
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className=" no-bottom-gap">
              {" "}
              Business category <span className="red-text">*</span>
            </h6>
            <div className=" input-field no-top-gap">
              <Input
                id="category"
                s={12}
                type="select"
                value={business.category}
                onChange={handleChange}
                name="category"
                className="all-borders"
              >
                <option value="1"> select </option>
                <option value="fashion">Fashion</option>
                <option value="technology">Technology</option>
                <option value="commerce">Commerce</option>
                <option value="education">Education</option>
                <option value="transportation">Transportation</option>
                <option value="sport">Sport</option>
                <option value="entertainment">Entertainment</option>
                <option value="food">Food</option>
                <option value="agric">Agric</option>
              </Input>
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className=" col s10 offset-s1">
            <h6 className="">
              {" "}
              Business Address <span className="red-text">*</span>
            </h6>
            <div className="input-field ">
              <textarea
                value={business.address}
                onChange={handleChange}
                name="address"
                className="materialize-textarea medium-input"
                length="200"
              />
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className="">
              {" "}
              Business Email<span className="red-text">*</span>{" "}
            </h6>
            <div className="input-field all-borders ">
              <input
                id="email"
                type="email"
                value={business.email}
                onChange={handleChange}
                name="email"
                className="validate"
                required
                maxLength="50"
              />
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1 m4 offset-m1">
            <h6 className="">
              {" "}
              Business Phone <span className="red-text">*</span>{" "}
            </h6>
            <div className="input-field all-borders ">
              <input
                id="phone"
                type="text"
                value={business.phone}
                onChange={handleChange}
                name="phone"
                className="validate"
                required
                minLength="8"
                maxLength="12"
              />
            </div>
          </div>
          <div className="col s10 offset-s1 m4 offset-m1">
            <h6 className="">
              {" "}
              Business City <span className="red-text">*</span>{" "}
            </h6>
            <div className="input-field all-borders">
              <input
                id="city"
                type="text"
                value={business.city}
                onChange={handleChange}
                name="city"
                className="validate"
                required
                minLength="2"
                maxLength="30"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s10 offset-s1">
            <h6 className="">
              {" "}
              Tell us about your business <span className="red-text">
                *
              </span>{" "}
            </h6>
            <div className="">
              <textarea
                id="about"
                value={business.about}
                onChange={handleChange}
                name="about"
                className="materialize-textarea large-input"
                length="1000"
              />
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className="">
              {" "}
              Uplaod your business picture{" "}
              <span className="optionals"> ( Optional ) </span>
            </h6>
            <div className="">
              <div>
                <img
                  className="responsive-img"
                  style={{
                    height: "200px",
                    width: "320px",
                    objectFit: "contain"
                  }}
                  src={image.imageSrc}
                />
              </div>
              <input
                id="imageUpload"
                type="file"
                accept="image/png, image/png, image/jpeg"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
        <div className="row center-align">{spinner}</div>
        <div className="row center-align">
          <input
            type="submit"
            value="Create Business"
            className="btn btn-large btn-edit waves-effect waves-light"
          />
        </div>
      </form>
    </div>
  );
};

export default BusinessForm;

BusinessForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired
};
