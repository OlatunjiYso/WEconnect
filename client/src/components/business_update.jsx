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
        const business = this.props.businessObject;
        const handleChange = this.props.handleChange;
        const handleSubmit = this.props.handleSubmit;
        return (
            <form className="col s10 offset-s1 m8 offset-m2 business-form" onSubmit={handleSubmit} >
                <div className="row top-pad">
                    <div className="input-field col s12">
                        <input placeholder= "Business name" type="text" value={business.businessName} onChange={handleChange} name="businessName" className="validate" />
                        <label>
                            Business Name:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <Input s={12} type='select' label='Location' icon='place' value={business.location} onChange={handleChange} name="location">
                            <option value=" lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value=" ogun">Ogun</option>
                        </Input>
                    </div>
                    <div className="col s12">
                        <Input s={12} type='select' label='Category' icon='card_travel' value={business.category} onChange={handleChange} name="category">
                            <option value='1'>Category</option>
                            <option value='fashion'>Fashion</option>
                            <option value='technology'>Technology</option>
                            <option value='housing'>Housing</option>
                        </Input>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="What is your business slogan?" type="text" value={business.slogan} onChange={handleChange} name="slogan" className="validate" />
                        <label>
                            Slogan:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={business.address} onChange={handleChange} name="address" className="materialize-textarea" length="140"></textarea>
                        <label>
                            Please provide your business address:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="business@myweb.com" type="text" value={business.email} onChange={handleChange} name="email" className="validate" />
                        <label>
                            Business email:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="080-xxx-xxx-xxx" type="text" value={business.phone} onChange={handleChange} name="phone" className="validate" />
                        <label>
                            Business phone:
                        </label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="city" type="text" value={business.city} onChange={handleChange} name="city" className="validate" />
                        <label>
                            city:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="whatsapp" type="text" value={business.whatsapp} onChange={handleChange} name="whatsapp" className="validate" />
                        <label>
                            Business whatsapp number:
                        </label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="@businessHandle" type="text" value={business.twitter} onChange={handleChange} name="twitter" className="validate" />
                        <label>
                            Business twitter handle:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="facebook" type="text" value={business.facebook} onChange={handleChange} name="facebook" className="validate" />
                        <label>
                            Business facebook page:
                        </label>
                    </div>
                    <div className="input-field col s6">
                        <input placeholder="lnstagram" type="text" value={business.instagram} onChange={handleChange} name="instagram" className="validate" />
                        <label>
                            Business linkedIn:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Provide your first section header. Your page will have three sections and this is the top section of your business page"
                            type="text" value={business.heading1} onChange={handleChange} name="heading1" className="validate" />
                        <label>
                            Heading 1:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={business.body1} onChange={handleChange} name="body1" className="materialize-textarea" length="1000"></textarea>
                        <label>
                            Give a write-up that complements the first section of your page:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Provide another section heading. This is the middle section of your business page" type="text" value={business.heading2} onChange={handleChange} name="heading2" className="validate" />
                        <label>
                            Heading 2:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={business.body2} onChange={handleChange} name="body2" className="materialize-textarea" length="1000"></textarea>
                        <label>
                            Give a write-up that complements the second section:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input placeholder="Provide the last section heading. This is the bottom section of your business page." type="text" value={business.heading3} onChange={handleChange} name="heading3" className="validate" />
                        <label>
                            Heading 3:
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea value={business.body3} onChange={handleChange} name="body3" className="materialize-textarea" length="1000"></textarea>
                        <label>
                            Give a write-up that complements the third section:
                        </label>
                    </div>
                </div>
                <div className="row center-align">
                    <input type="submit" value="Preview" className="btn green darken-2"/>
                </div>
            </form>
        )

    }
}


BusinessForm.propTypes = {
    businessObject: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}
export default BusinessForm;