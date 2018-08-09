import React from "react";
import { Input } from "react-materialize";
import PropTypes from "prop-types";

/**
 * @description renders a serching panel for businesses
 * @function BusinessCatalogTop
 *
 * @param { object } props - information passed from parent component
 *
 * @returns { jsx } jsx - displays a search panel
 */
const BusinessCatalogTop = props => {
  const {
    proposedFilter,
    selectedFilter,
    handleChange,
    handleSubmit,
    businessList
  } = props;
  const { category } = selectedFilter;
  const displayedCategory = category !== "category" ? category : "";
  const chosenState = selectedFilter.state;
  const displayedLocation =
    chosenState !== "location" ? `in ${chosenState}` : "for you!";
  const displayTitle =
    businessList.length > 0 ? (
      <span>
        {" "}
        Our collection of {displayedCategory} businesses {displayedLocation}{" "}
      </span>
    ) : (
      <span> Business Gallery </span>
    );
  return (
    <div className="row top-gap bottom-gap">
      <div className="col s12 body-font center-align grey-text text-darken-2 bottom-gap">
        <h4>{displayTitle}</h4>
      </div>
      <div className="row center-align container search-section">
        <form onSubmit={handleSubmit}>
          <h5 className="hide-on-small-only col l1 s12 pink-text"> Find </h5>
          <div className="input-field col l3 s6">
            <Input
              s={12}
              type="select"
              value={proposedFilter.category}
              onChange={handleChange}
              name="category"
              className="select-borders faint-pink-hover"
            >
              <option value="category">All categories of</option>
              <option value="fashion">Fashion</option>
              <option value="technology">Technology</option>
              <option value="sport">Sport</option>
              <option value="education">Education</option>
              <option value="food">Food</option>
              <option value="entertainment">Entertainment</option>
              <option value="agric">Agric</option>
              <option value="commerce">Commerce</option>
            </Input>
          </div>
          <h5 className="hide-on-small-only col l3 s12 pink-text "> Businesses in </h5>
          <div className="input-field col l3 s6 ">
            <Input
              s={12}
              type="select"
              value={proposedFilter.state}
              onChange={handleChange}
              name="state"
              className="select-borders faint-pink-hover"
            >
              <option value="location">All locations</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="ogun">Ogun</option>
              <option value="oyo">Oyo</option>
            </Input>
          </div>
          <div className="col l2 s8 offset-s2 push-down">
            <input
              type="submit"
              value="Search"
              className=" form-btn btn  select-borders"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessCatalogTop;

BusinessCatalogTop.propTypes = {
  proposedFilter: PropTypes.object.isRequired,
  selectedFilter: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  businessList: PropTypes.array.isRequired
};
