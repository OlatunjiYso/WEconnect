import React from "react";
import { Input } from "react-materialize";
import PropTypes from "prop-types";

import loader from "../assets/images/loader.gif";

/**
 * @description renders a form which hold initial busines information
 * @function BusinessUpdateForm
 *
 * @param { object } props - information passed from parent component
 *
 * @returns { jsx } jsx - a business form
 */
const BusinessUpdateForm = props => {
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
            <h6 key={index}>
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
        <h6>
          <i className="material-icons red-text tiny">clear</i>{" "}
          {formErrors.data.message}
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
  const spinner = props.isFetching ? (
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
        <div className="row top-pad no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className="grey-text text-darken-2 no-bottom-gap">
              {" "}
              Business Name <span className="red-text">*</span>
            </h6>
            <div className="input-field  all-borders">
              <input
                type="text"
                value={business.name}
                onChange={handleChange}
                name="name"
                className="validate"
              />
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className="grey-text text-darken-2 no-bottom-gap">
              {" "}
              Business state <span className="red-text">*</span>
            </h6>
            <div className=" input-field ">
              <Input
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
            <h6 className="grey-text text-darken-2 no-bottom-gap">
              {" "}
              Business category <span className="red-text">*</span>
            </h6>
            <div className=" input-field ">
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
          <div className="col s10 offset-s1">
            <h6 className="grey-text text-darken-2 no-bottom-gap">
              {" "}
              Business Address <span className="red-text">*</span>
            </h6>
            <div className="input-field ">
              <textarea
                value={business.address}
                onChange={handleChange}
                name="address"
                className="materialize-textarea medium-input"
                length="140"
              />
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className="grey-text text-darken-2 no-bottom-gap">
              {" "}
              Business Email<span className="red-text">*</span>{" "}
            </h6>
            <div className="input-field all-borders">
              <input
                type="text"
                value={business.email}
                onChange={handleChange}
                name="email"
                className="validate"
              />
            </div>
          </div>
        </div>
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1 m4 offset-m1">
            <h6 className="grey-text text-darken-2 no-bottom-gap">
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
          <div className="col s10 offset-s1 m4 offset-m1">
            <h6 className=" grey-text text-darken-2 no-bottom-gap">
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
        <div className="row no-bottom-gap">
          <div className="col s10 offset-s1">
            <h6 className="grey-text text-darken-2">
              {" "}
              Tell us about your business <span className="red-text">
                *
              </span>{" "}
            </h6>
            <div className="">
              <textarea
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
            <h6 className="grey-text text-darken-2 no-bottom-gap">
              {" "}
              Uplaod your business picture{" "}
              <span className="optionals"> ( Optional ) </span>
            </h6>
            <div className="">
              <div>
                <img
                  className="responsive-img"
                  style={{ height: "200px", width: "320px" }}
                  src={image.imageSrc}
                />
              </div>
              <input type="file" onChange={handleImageChange} />
            </div>
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
};

export default BusinessUpdateForm;

BusinessUpdateForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired,
  formErrors: PropTypes.object.isRequired,
};
