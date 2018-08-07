import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchThisBusiness } from "../actions/business";
import Navbar from "./nav";
import BusinessBanner from "../components/businessBanner";
import BusinessMetrics from "../components/businessMetrics";
import Footer from "../components/footer";
import profilePicture from "../assets/images/cameras.jpg";

/**
 * @class ManageBusiness
 *
 * @extends {React.Component}
 */
export class ManageBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @description fetches business data before page loads
   * 
   * @method componentWillMount
   *
   * @memberof AllBusinessesComponent
   * @returns {func} function
   */
  componentWillMount() {
    const { dispatch, match } = this.props;
    const businessId = this.props.match.params.businessId;
    this.props.fetchThisBusiness(businessId);
  }

  /**
   * @description renders the business management page
   *
   * @method render
   * 
   * @memberof ManageBusiness Component
   * 
   * @returns {jsx} business management page
   */
  render() {
    const { business } = this.props.businessData;
    const { id } = business;
    return (
      <div id="manage">
        <Navbar />
        <main>
          <BusinessBanner business={business} pic={profilePicture} />
          <div id="businessReport">
            <BusinessMetrics />
            <div className="row body-font container">
              <div className="row top-pad">
                <div className="col s6">
                  <Link
                    to={`/businessDelete/${id}`}
                    className="btn btn-large btn-danger right "
                  >
                    Delete
                  </Link>
                </div>
                <div className="col s6">
                  <Link
                    to={`/businessUpdate/${id}`}
                    className="btn btn-large btn-edit left"
                  >
                    Update
                  </Link>
                </div>
              </div>
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
  return bindActionCreators({ fetchThisBusiness }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBusiness);
