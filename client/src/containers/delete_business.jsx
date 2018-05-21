import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { deleteBusiness } from '../actions/business';
import setToken from '../helpers/authorization';
import history from '../history';
import businessActions from '../actions/business';
import Footer from '../components/footer';
import Navbar from './nav'
import customStyles from '../css/style.css';

/**
 * @class DeleteBusiness
 * 
 * @extends {React.Component}
 */
class DeleteBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if (!this.props.data.business.name) {
            history.push('/userProfile');
        }
        console.log(this.props.data.business.name)
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
        const value = event.target.value
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const pass = this.state
        const businessId = this.props.match.params.businessId;
        this.props.deleteBusiness(pass, businessId)
    }
    /** 
    *
    * @returns {JSX} JSX
    * 
    * @memberof DeleteBusiness Component
    */
    render() {
        const formErrors = this.props.data.errors
        const isFetching = this.props.data.awaiting

        // Display spinner
        const spinner = isFetching ?
            <span className="form-response"> Please wait .... </span> : null;

        // Display password mismatch
        const wrongPassword = this.props.data.passwordMismatch ?
            <div className="col s8 offset-s2 m8 center-align error-box">
                <h6>
                    <i className="material-icons red-text tiny">clear</i> Incorrect password!
                </h6>
            </div> : null

        // Display right infingement errors
        const infringement = formErrors.forbidden ?
        <div className="col s8 offset-s2 m8 center-align error-box">
            <h6>
                <i className="material-icons red-text tiny">clear</i> {formErrors.forbidden}
            </h6>
        </div> : null

        return (
            <div>
                <Navbar />
                <main>
                    <div className="row">
                        <div className="top-pad col s12 m8 offset-m2">
                            <h4 className="left-align red-text text-darken-2">
                                Before you delete " {this.props.data.business.name} "
                            </h4>
                            <h5 className = "green-text"> Please take note of the following: </h5>
                            <ol className="delete-note no-top-gap">
                                <li>
                                    <span className="delete-note"> This action is irreversible </span>
                                </li>
                                <li>
                                    <span  className="delete-note">All business information would be lost </span>
                                </li>
                                <li>
                                    <span  className="delete-note">All business reviews would be lost </span>
                                </li>
                            </ol>
                            <div className="top-pad">
                                <h5> Final confimation and authentication </h5>
                                {wrongPassword} {infringement}
                                <div className="col s8 offset-s2 m8 form-jacket">
                                    <form onSubmit={this.handleSubmit}>
                                        <label className="form-label">
                                            Enter your Password to proceed: </label>
                                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" required className="form-input white" />
                                        <div>
                                            <input type="submit" value="Delete Business" className="delete-form-btn btn" />
                                            <Link to="/userProfile" className="form-btn btn right"> Back</Link>
                                        </div>
                                        <div className = "center">
                                            {spinner}
                                        </div>
                                    </form>
                                </div>

                            </div>

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
    console.log(data);
    return {
        data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deleteBusiness }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBusiness);