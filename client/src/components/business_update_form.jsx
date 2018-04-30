import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-materialize';

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

        // Display validation errors if present
        const validationErrors = formErrors.validationErrors ?
            <div className=" col s8 offset-s2 m6 offset-m3 left-align error-box bottom-gap">
                {formErrors.validationErrors.map((eachError, index) => {
                    return <h6 key={index}>
                        <i className="material-icons red-text tiny">clear</i>{eachError}
                    </h6>
                })}
            </div> : null;

        // Display Conflict errors if present
        const conflictErrors = formErrors.conflict ?
            <div className="col s8 offset-s2 m6 offset-m3 center-align error-box bottom-gap">
                <h6>
                    <i className="material-icons red-text tiny">clear</i> {formErrors.conflict}
                </h6>
            </div> : null

        // Display Forbidden case errors if present
        const forbiddenErrors = formErrors.forbidden ?
            <div className="col s8 offset-s2 m6 offset-m3 center-align error-box bottom-gap">
                <h6>
                    <i className="material-icons red-text tiny">clear</i> {formErrors.forbidden}
                </h6>
            </div> : null

        // Display asyncronous call progress feedback
        const spinner = this.props.isFetching ?
            <span className="form-response"> Please wait .... </span> : null;

        // Display business update outcome
        const updateOutcome = (formErrors.conflict || formErrors.validationErrors || formErrors.others || formErrors.forbidden) ?
            <span> An error occured. Scroll up please </span> : null
        return (
            <div>
                <div>
                    {validationErrors} {conflictErrors} {forbiddenErrors}
                </div>
                <form className="col s10 offset-s1 m8 offset-m2 business-form" onSubmit={handleSubmit} >
                    <div className="row top-pad">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Business Name </h6>
                            <input type="text" value={business.name} onChange={handleChange} name="name" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Location </h6>
                            <Input s={12} type='select' icon='place' value={business.state} onChange={handleChange} name="state">
                                <option value=" lagos">Lagos</option>
                                <option value="abuja">Abuja</option>
                                <option value=" ogun">Ogun</option>
                            </Input>
                        </div>
                        <div className="col s12">
                            <h6 className="green-text"> Category </h6>
                            <Input s={12} type='select' icon='card_travel' value={business.category} onChange={handleChange} name="category">
                                <option value='fashion'>Fashion</option>
                                <option value='technology'>Technology</option>
                                <option value='housing'>Housing</option>
                            </Input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Slogan</h6>
                            <input type="text" value={business.slogan} onChange={handleChange} name="slogan" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Business address:</h6>
                            <textarea value={business.address} onChange={handleChange} name="address" className="materialize-textarea" length="140"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Business email: </h6>
                            <input type="text" value={business.email} onChange={handleChange} name="email" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <h6 className="green-text"> Business phone: </h6>
                            <input type="text" value={business.phone} onChange={handleChange} name="phone" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <h6 className="green-text"> City: </h6>
                            <input type="text" value={business.city} onChange={handleChange} name="city" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <h6 className="green-text"> Business whatsapp number: </h6>
                            <input type="text" value={business.whatsapp} onChange={handleChange} name="whatsapp" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <h6 className="green-text">  Business twitter handle: </h6>
                            <input type="text" value={business.twitter} onChange={handleChange} name="twitter" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <h6 className="green-text"> Business facebook page: </h6>
                            <input type="text" value={business.facebook} onChange={handleChange} name="facebook" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <h6 className="green-text"> Business linkedIn: </h6>
                            <input type="text" value={business.instagram} onChange={handleChange} name="instagram" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Heading 1: </h6>
                            <input type="text" value={business.heading1} onChange={handleChange} name="heading1" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> First section of your page: </h6>
                            <textarea value={business.body1} onChange={handleChange} name="body1" className="materialize-textarea" length="1000"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Heading 2: </h6>
                            <input type="text" value={business.heading2} onChange={handleChange} name="heading2" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Second section of your page: </h6>
                            <textarea value={business.body2} onChange={handleChange} name="body2" className="materialize-textarea" length="1000"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Heading 3: </h6>
                            <input type="text" value={business.heading3} onChange={handleChange} name="heading3" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6 className="green-text"> Third section of your page: </h6>
                            <textarea value={business.body3} onChange={handleChange} name="body3" className="materialize-textarea" length="1000"></textarea>
                        </div>
                    </div>
                    <div className="row center-align">
                        <input type="submit" value="Update Business" className="btn green darken-2" />
                    </div>
                    <div className="center brown-text">
                        {updateOutcome} {spinner}
                    </div>
                </form>
            </div>
        )

    }
}


BusinessUpdateForm.propTypes = {
    businessObject: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    formErrors: PropTypes.object.isRequired,
}
export default BusinessUpdateForm;