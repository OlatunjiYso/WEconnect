import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {Input} from 'react-materialize';

/**
 * @description BusinessFormComponent
 * 
 * @extends {React.Component}
 */
class BusinessForm extends Component {
    /** 
    *
    *
    * @returns {JSX} JSX
    * 
    * @memberof BusinessFormComponent
    */
    render() {
        // Bring in methods as props from regForm container
        const handleChange = this.props.handleChange;
        const handleSubmit = this.props.handleSubmit;

         // Bring in data as props from regForm container
         const business = this.props.businessObject;
         const formErrors = this.props.formErrors;
 
         // Display validation errors if present
         const validationErrors = formErrors.status === 400 ?
                 <div className=" col s8 offset-s2 m6 offset-m3 left-align error-box bottom-gap">
                     {formErrors.data.errors.map((eachError, index) => {
                         return <h6 key={index}>
                             <i className="material-icons red-text tiny">clear</i>{eachError}
                           </h6>
                     })}
                 </div> : null;    
 
         // Display Conflict errors if present
         const conflictErrors = formErrors.status === 409 ?
                 <div className="col s8 offset-s2 m6 offset-m3 center-align error-box bottom-gap">
                     <h6>
                     <i className="material-icons red-text tiny">clear</i> {formErrors.data.message}
                     </h6>
                 </div> : null

         // Display asyncronous call progress feedback
         const spinner = this.props.isFetching ?
         <span className="form-response"> Please wait .... </span> : null;

          // Display business registration outcome
        const registrationOutcome = ( formErrors.status ) ?
        <span> An error occured. Scroll up please </span> : null

        return (
            <div>
            <div>
                {validationErrors} {conflictErrors}
            </div>
            <form className="col s10 offset-s1 m8 offset-m2 business-form" onSubmit={handleSubmit} >
                <div className="row top-pad">
                    <div className="input-field col s12">
                        <input placeholder= "Business name" type="text" value={business.name} onChange={handleChange} name="name" className="validate" required minLength="2" maxLength="35"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <Input s={12} type='select' value={business.state} onChange={handleChange} name="state">
                            <option value='1'>State</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value="ogun">Ogun</option>
                        </Input>
                    </div>
                    <div className="col s12">
                        <Input s={12} type='select' value={business.category} onChange={handleChange} name="category">
                            <option value='1'>Category</option>
                            <option value='fashion'>Fashion</option>
                            <option value='technology'>Technology</option>
                            <option value='housing'>Housing</option>
                        </Input>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Business slogan?" type="text" value={business.slogan} onChange={handleChange} name="slogan" className="validate" required minLength="2" maxLength="40"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={business.address} placeholder= "Business Address" onChange={handleChange} name="address" className="materialize-textarea" length="140"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Business Email" type="email" value={business.email} onChange={handleChange} name="email" className="validate" required  maxLength="20"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Phone" type="text" value={business.phone} onChange={handleChange} name="phone" className="validate" required minLength="8" maxLength="12"/>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="City" type="text" value={business.city} onChange={handleChange} name="city" className="validate" required minLength="2" maxLength="15"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Whatsapp contact" type="text" value={business.whatsapp} onChange={handleChange} name="whatsapp" className="validate" required minLength="8" maxLength="12"/>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="Business Twitter" type="text" value={business.twitter} onChange={handleChange} name="twitter" className="validate" required minLength="2" maxLength="20"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Facebook" type="text" value={business.facebook} onChange={handleChange} name="facebook" className="validate" required minLength="3" maxLength="26"/>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="lnstagram" type="text" value={business.instagram} onChange={handleChange} name="instagram" className="validate" required minLength="3" maxLength="26"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Provide your first section header."
                            type="text" value={business.heading1} onChange={handleChange} name="heading1" className="validate" required minLength="2" maxLength="20"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={business.body1} placeholder= "Give a write-up that complements the first section of your page:"onChange={handleChange} name="body1" className="materialize-textarea" length="1000"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Provide another section heading." type="text" value={business.heading2} onChange={handleChange} name="heading2" className="validate" minLength="2" maxLength="20"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={business.body2} placeholder="Give a write-up that complements the second section:" onChange={handleChange} name="body2" className="materialize-textarea" length="1000"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Provide the last section heading." type="text" value={business.heading3} onChange={handleChange} name="heading3" className="validate" minLength="2" maxLength="20"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={business.body3} placeholder="Give a write-up that complements the third section" onChange={handleChange} name="body3" className="materialize-textarea" length="1000"></textarea>
                    </div>
                </div>
                <div className="row center-align">
                    <input type="submit" value="Create Business" className="btn btn-large green darken-2" />
                </div>
                <div className= "center brown-text">
                {registrationOutcome} {spinner}
                </div>
            </form>
           </div>
        )

    }
}


BusinessForm.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    businessObject: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    formErrors: PropTypes.object.isRequired,
}
export default BusinessForm;