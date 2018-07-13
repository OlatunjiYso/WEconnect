import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Pagination } from "react-materialize";

import Footer from "../components/footer";
import Navbar from "./nav";
import { fetchAllBusinesses } from "../actions/business";
import BusinessCatalogTop from "../components/businessCatalogTop";
import BusinessCard from "../components/businessCard";

/**
 * @class AllBusinessComponent
 *
 * @extends {React.Component}
 */
class AllBusinesses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        state: "location",
        category: "category"
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSelectPagination = this.onSelectPagination.bind(this);
  }

  /**
   *@description runs just before page loads
   * @returns {JSX} JSX
   *
   * @memberof AllBusinessesComponent
   */
  componentWillMount() {
    const defaultFilter = {
      state: "location",
      category: "category"
    };
    const pageNumber = 1;
    const { landingPageFilter } = this.props.landingPageData;
    if (landingPageFilter.category) {
      this.props.fetchAllBusinesses(landingPageFilter, pageNumber);
    } else {
      this.props.fetchAllBusinesses(defaultFilter, pageNumber);
    }
  }

  /**
   *@description handles change in input field
   *@param {event} event
   *
   *@returns {func} funtion
   *@memberof AllBusinessComponent Component
   *
   */
  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      filter: { ...this.state.filter, [name]: value }
    });
  }

  /**
   *@description sends businessData to server
   *
   * @returns {func} funtion
   *
   * @memberof AllBusinessComponent Component;
   */
  handleSubmit(event) {
    event.preventDefault();
    const filter = this.state.filter;
    const pageNumber = 1;
    this.props.fetchAllBusinesses(filter, pageNumber);
  }
  onSelectPagination(pageNumber) {
    const filter = this.state.filter;
    this.props.fetchAllBusinesses(filter, pageNumber);
  }

  /**@description generates cards of businesses from an array of businesses
   *
   * @returns {JSX} JSX
   *
   * @memberof AllBusinessesComponent
   */
  render() {
    const { businesses, filter, pages } = this.props.businessData;

    const FoundBusinesses =
      businesses.length > 0 ? (
        businesses.map((eachBusiness, index) => {
          return <BusinessCard key={index} business={eachBusiness} />;
        })
      ) : (
        <h4> No business found </h4>
      );
    return (
      <div>
        <Navbar />
        <main>
          <BusinessCatalogTop
            proposedFilter={this.state.filter}
            selectedFilter={filter}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            businessList={businesses}
          />
          <div className="row container center">{FoundBusinesses}</div>
        </main>
        <Pagination
          items={pages}
          activePage={1}
          maxButtons={8}
          className="center"
          onSelect={this.onSelectPagination}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const businessData = state.businessReducer;
  const landingPageData = state.landingPageReducer;
  return {
    businessData,
    landingPageData
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAllBusinesses }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBusinesses);
