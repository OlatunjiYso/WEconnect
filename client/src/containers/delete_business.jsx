import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";

import { deleteBusiness } from "../actions/business";
import setToken from "../helpers/authorization";
import history from "../history";
import Footer from "../components/footer";
import Navbar from "./nav";
import bin from "../assets/images/delete.png";
/**
 * @class DeleteBusiness
 *
 * @extends {React.Component}
 */
class DeleteBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.data.business.name) {
      history.push("/userProfile");
    }
  }
  /**
   *@description handles change in input field
   *
   * @returns {func} funtion
   *
   * @memberof DeleteBusiness Component
   */
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const pass = this.state;
    const businessId = this.props.match.params.businessId;
    this.props.deleteBusiness(pass, businessId);
  }
  /**
   *
   * @returns {JSX} JSX
   *
   * @memberof DeleteBusiness Component
   */
  render() {
    const formErrors = this.props.data.errors;
    const isFetching = this.props.data.awaitingResponse;

    // Display spinner
    const spinner = isFetching ? (
      <span className="form-response"> Please wait .... </span>
    ) : null;

    return (
      <div>
        <Navbar />
        <main>
          <div className="row">
            <div className="top-pad center">
              <h4 className="green-text text-darken-2">
                Before you delete "{this.props.data.business.name}"
              </h4>
              <img src={bin} className="responsive-img" />
              <h5 className="pink-text text-darken-4">
                {" "}
                Please take note that this action is irreversible
              </h5>
              <div className="top-pad col s12 m6 offset-m3">
                <div className="delete-form">
                  <form onSubmit={this.handleSubmit}>
                    <h6 className="mid-bottom-gap">
                      Enter your Password to proceed:
                    </h6>
                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"
                      required
                      className="form-input white"
                    />
                    <div>
                      <input
                        type="submit"
                        value="Delete"
                        className="btn-danger btn"
                      />
                      <Link to="/userProfile" className="btn-edit btn">
                        Cancel
                      </Link>
                    </div>
                    <div className="center">{spinner}</div>
                  </form>
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
  const data = state.businessReducer;
  return {
    data
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteBusiness }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteBusiness);
