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
        const isFetching = this.props.data.awaitingResponse

        // Display spinner
        const spinner = isFetching ?
            <span className="form-response"> Please wait .... </span> : null;

        return (
            <div>
                <Navbar />
                <main>
                    <div className="row">
                        <div className="top-pad center-align col s12 m6 offset-m3">
                            <h4 className="red-text text-darken-2">
                                Before you delete "{this.props.data.business.name}"
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
                                <h5 className="center-align"> Final confimation and authentication </h5>
                                <div className="col s10 offset-s1 form-jacket">
                                    <form onSubmit={this.handleSubmit}>
                                        <label className="form-label">
                                            Enter your Password to proceed: </label>
                                        <input type="password" value={this.state.password} onChange={this.handleChange} name="password" required className="form-input white" />
                                        <div>
                                            <input type="submit" value="Delete" className="delete-form-btn btn" />
                                            <Link to="/userProfile" className="form-btn btn right"> Cancel</Link>
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
    return {
        data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deleteBusiness }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBusiness);